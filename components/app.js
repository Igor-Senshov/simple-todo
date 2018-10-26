import React from "react"
import ReactDOM from "react-dom"
import {
	QueryRenderer,
	graphql,
} from "react-relay"

import environment from "./relay/environment"

import TodoList from "./todo-list/TodoList"

import styles from "../styles.css"

const appQuery = graphql`
  query appQuery {
    viewer {
      ...TodoList_viewer
    }
  }
`


class App extends React.PureComponent {
	render() {
		const { main } = styles

		return (
			<QueryRenderer
				environment={environment}
				query={appQuery}
				render={({error, props}) => {
					if (error) {
						return <div>{error.message}</div>
					} else if (props) {
						return <div className={main}><TodoList viewer={props.viewer} /></div>
					}
					return <div>Loading...</div>
				}}
			/>
		)
	}
}

ReactDOM.render(
	<App/>,
	document.getElementById("todo")
)