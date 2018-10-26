import React from "react"
import {
	createFragmentContainer,
	graphql,
} from "react-relay"

import TodoListItem from "../todo-list-item/TodoListItem"
import TodoInputListItem from "../todo-input-list-item/TodoInputListItem"

import styles from "./todo-list.css"

class TodoList extends React.PureComponent {
	render() {
		const { todoListContainer } = styles
		const { viewer } = this.props || {}

		return(
			<div className={todoListContainer}>
				{this.props.viewer.allTodoes.edges.map(({ node }) =>
					<TodoListItem
						key={node.__id}
						id={node.__id}
						todo={node}
						viewer={viewer}
					/>)}
				<TodoInputListItem/>
			</div>
		)
	}
}

export default createFragmentContainer(TodoList, graphql`
  fragment TodoList_viewer on Viewer {
    ...TodoListItem_viewer
    allTodoes(last: 100, orderBy: checked_DESC) @connection(key: "TodoList_allTodoes", filters: []) {
      edges {
        node {
          ...TodoListItem_todo
        }
      }
    }
  }
`)
