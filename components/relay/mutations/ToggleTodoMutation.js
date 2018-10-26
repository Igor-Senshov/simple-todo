import {
	commitMutation,
	graphql,
} from "react-relay"
import { ConnectionHandler } from "relay-runtime"
import environment from "../environment"
import DOMPurify from "dompurify"

const mutation = graphql`
  mutation ToggleTodoMutation($input: UpdateTodoInput!) {
    updateTodo(input: $input) {
      todo {
				id
				message
				checked
      }
    }
  }
`

export default (todoId, message, checked) => {
	const cleanMessage = DOMPurify.sanitize(message)
	const cleanCheck = typeof checked === "boolean" ? checked : false

	const variables = {
		input: {
			id: todoId,
			message: cleanMessage,
			checked: cleanCheck,
			clientMutationId: ""
		},
	}
	commitMutation(
		environment,
		{
			mutation,
			variables,
			onError: err => console.error(err),
		},
	)
}
