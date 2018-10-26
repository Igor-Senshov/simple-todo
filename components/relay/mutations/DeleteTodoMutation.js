import {
	commitMutation,
	graphql,
} from "react-relay"
import { ConnectionHandler } from "relay-runtime"
import environment from "../environment"

const mutation = graphql`
  mutation DeleteTodoMutation($input: DeleteTodoInput!) {
    deleteTodo(input: $input) {
      deletedId
    }
  }
`

export default (todoId, viewerId) => {
	const variables = {
		input: {
			id: todoId,
			clientMutationId: ""
		},
	}
	commitMutation(
		environment,
		{
			mutation,
			variables,
			optimisticUpdater: (proxyStore) => {
				const viewerProxy = proxyStore.get(viewerId)
				const connection = ConnectionHandler.getConnection(viewerProxy, "TodoList_allTodoes")
				if (connection) {
					ConnectionHandler.deleteNode(connection, todoId)
				}
			},
			updater: (proxyStore) => {
				const deleteTodoField = proxyStore.getRootField("deleteTodo")
				const deletedId = deleteTodoField.getValue("deletedId")
				const viewerProxy = proxyStore.get(viewerId)
				const connection = ConnectionHandler.getConnection(viewerProxy, "TodoList_allTodoes")
				if (connection) {
					ConnectionHandler.deleteNode(connection, deletedId)
				}
			},
			onError: err => console.error(err),
		},
	)
}
