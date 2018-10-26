import React from "react"
import {
	QueryRenderer,
	graphql,
} from "react-relay"

import environment from "../relay/environment"
import CreateTodoMutation from "../relay/mutations/CreateTodoMutation"

import styles from "./todo-input-list-item.css"
import Checkbox from "../checkbox";

const CreateTodoViewerQuery = graphql`
  query TodoInputListItemQuery {
    viewer {
      id
    }
  }
`


export default class TodoInputListItem extends React.PureComponent {
	state = {
		message: "",
		checked: false,
	}

	handleChange = e => {
		const { target } = e || {}
		const { name, type, value: targetVal, checked } = target || {}

		const value = type === "checkbox" ? checked : targetVal;

		this.setState(() => ({ [name]: value }))
	}

	handleSave = props => {
		const { viewer } = props || {}
		const { id } = viewer || {}
		const { message, checked } = this.state

		CreateTodoMutation(message, checked, id, () => location.reload())
	}

	render() {
		const { message, checked } = this.state
		const { todoInputListItemContainer, inputContainer, saveButton } = styles

		return(
			<QueryRenderer
				environment={environment}
				query={CreateTodoViewerQuery}
				render={({error, props}) => {
					if (error) {
						return <div>{error.message}</div>
					} else if (props) {
						return (
							<>
								<div className={todoInputListItemContainer}>
									<label className={inputContainer} htmlFor="message">
										<input
											id="message"
											name="message"
											type="text"
											value={message}
											onChange={this.handleChange}
										/>
									</label>
									<Checkbox
										id="checked"
										name="checked"
										checked={checked}
										handleCheck={this.handleChange}
									/>
								</div>
								{message &&
								<span className={saveButton} onClick={() => this.handleSave(props)}>Save</span>}
							</>
						)
					}
					return <div>Loading...</div>
			}}
			/>
		)
	}
}