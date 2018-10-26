import React from "react"
import {
	createFragmentContainer,
	graphql,
} from "react-relay"

import Checkbox from "../checkbox"
import ToggleTodoMutation from "../relay/mutations/ToggleTodoMutation"
import DeleteTodoMutation from "../relay/mutations/DeleteTodoMutation"

import styles from "./todo-list-item.css"

class TodoListItem extends React.PureComponent {
	constructor(props) {
		super(props)
		const { checked } = this.props || {}

		this.state = {
			checked,
		}
	}


	handleCheck = e => {
    const { target } = e || {}
    const { name, checked } = target || {}
		const { todo } = this.props || {}
		const { id, message } = todo || {}

		ToggleTodoMutation(id, message, checked)
		this.setState(() => ({ [name]: checked }))
  }

	handleDelete = () => {
		const { todo, viewer } = this.props || {}
		const { id } = todo || {}
		const { id: viewerId } = viewer || {}

		DeleteTodoMutation(id, viewerId)
	}

  render() {
		const { todo, id } = this.props || {}
		const { message, checked } = todo || {}
		const { todoListItemContainer, deleteButton } = styles

    return(
			<div className={todoListItemContainer}>
				{message}
				<Checkbox
					id={id}
					name={id}
					checked={checked}
					handleCheck={this.handleCheck}
        />
				<span className={deleteButton} onClick={this.handleDelete}>X</span>
			</div>
		)
  }
}

export default createFragmentContainer(TodoListItem, graphql`
  fragment TodoListItem_viewer on Viewer {
    id
  }
  fragment TodoListItem_todo on Todo {
    id
    message
    checked
  }
`)