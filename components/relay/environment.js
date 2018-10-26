const {
	Environment,
	Network,
	RecordSource,
	Store,
} = require("relay-runtime")

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {

	return fetch("https://api.graph.cool/relay/v1/cjno6zvm92yz90163txsshenx", {
		method: "POST",
		headers: {
			"Accept": "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			query: operation.text,
			variables,
		}),
	}).then(response => {
		return response.json()
	})
})

export default new Environment({
	network,
	store,
})
