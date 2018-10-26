import {
	commitMutation,
	graphql,
} from "react-relay"
import { ConnectionHandler } from "relay-runtime"
import environment from "../environment"
import DOMPurify from "dompurify";

const mutation = graphql`
  mutation CreateTodoMutation($input: CreateTodoInput!) {
    createTodo(input: $input) {
      todo {
        id
        message
        checked
      }
    }
  }
`

export default (message, checked, viewerId, callback) => {
	const cleanMessage = DOMPurify.sanitize(message)
	const cleanCheck = typeof checked === "boolean" ? checked : false

	const variables = {
		input: {
			message: cleanMessage,
			checked: cleanCheck,
			clientMutationId: ""
		},
	}

	let tempID = 0;

	commitMutation(
		environment,
		{
			mutation,
			variables,
			optimisticUpdater: (proxyStore) => {
				const id = "client:newTodo:" + tempID++
				const newTodo = proxyStore.create(id, "Todo")
				newTodo.setValue(id, "id")
				newTodo.setValue(cleanMessage, "message")
				newTodo.setValue(cleanCheck, "checked")

				const viewerProxy = proxyStore.get(viewerId)
				const connection = ConnectionHandler.getConnection(viewerProxy, "TodoList_allTodoes")
				if (connection) {
					ConnectionHandler.insertEdgeAfter(connection, newTodo)
				}
			},
			updater: (proxyStore) => {
				const createTodoField = proxyStore.getRootField("createTodo")
				const newTodo = createTodoField.getLinkedRecord("todo")

				const viewerProxy = proxyStore.get(viewerId)
				const connection = ConnectionHandler.getConnection(viewerProxy, "TodoList_allTodoes")
				if (connection) {
					ConnectionHandler.insertEdgeAfter(connection, newTodo)
				}
			},
			onCompleted: () => {
				callback()
			},
			onError: err => console.error(err),
		},
	)
}