/**
 * @flow
 * @relayHash 48cefd092261b5949b45cfc6d0d82ce4
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTodoInput = {
  id: string,
  clientMutationId: string,
};
export type DeleteTodoMutationVariables = {|
  input: DeleteTodoInput
|};
export type DeleteTodoMutationResponse = {|
  +deleteTodo: ?{|
    +deletedId: ?string
  |}
|};
export type DeleteTodoMutation = {|
  variables: DeleteTodoMutationVariables,
  response: DeleteTodoMutationResponse,
|};
*/


/*
mutation DeleteTodoMutation(
  $input: DeleteTodoInput!
) {
  deleteTodo(input: $input) {
    deletedId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "DeleteTodoInput!"
      }
    ],
    "concreteType": "DeleteTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "deletedId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "DeleteTodoMutation",
  "id": null,
  "text": "mutation DeleteTodoMutation(\n  $input: DeleteTodoInput!\n) {\n  deleteTodo(input: $input) {\n    deletedId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteTodoMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'db30170bbebb581e9518a3f4826c2bf2';
module.exports = node;
