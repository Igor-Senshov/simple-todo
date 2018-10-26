/**
 * @flow
 * @relayHash 74b92555c915e50f3cb82066138e792e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TodoInputListItemQueryVariables = {||};
export type TodoInputListItemQueryResponse = {|
  +viewer: {|
    +id: string
  |}
|};
export type TodoInputListItemQuery = {|
  variables: TodoInputListItemQueryVariables,
  response: TodoInputListItemQueryResponse,
|};
*/


/*
query TodoInputListItemQuery {
  viewer {
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "viewer",
    "storageKey": null,
    "args": null,
    "concreteType": "Viewer",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TodoInputListItemQuery",
  "id": null,
  "text": "query TodoInputListItemQuery {\n  viewer {\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TodoInputListItemQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "TodoInputListItemQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f2ec4bfaf95f2c1368ef28c3e1c85d4f';
module.exports = node;
