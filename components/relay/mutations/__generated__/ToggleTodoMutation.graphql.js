/**
 * @flow
 * @relayHash d1d4e9799fd2e2c39b40ae33b33c1dcc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateTodoInput = {
  checked?: ?boolean,
  id: string,
  message?: ?string,
  clientMutationId: string,
};
export type ToggleTodoMutationVariables = {|
  input: UpdateTodoInput
|};
export type ToggleTodoMutationResponse = {|
  +updateTodo: ?{|
    +todo: ?{|
      +id: string,
      +message: string,
      +checked: boolean,
    |}
  |}
|};
export type ToggleTodoMutation = {|
  variables: ToggleTodoMutationVariables,
  response: ToggleTodoMutationResponse,
|};
*/


/*
mutation ToggleTodoMutation(
  $input: UpdateTodoInput!
) {
  updateTodo(input: $input) {
    todo {
      id
      message
      checked
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateTodoInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateTodo",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateTodoInput!"
      }
    ],
    "concreteType": "UpdateTodoPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "todo",
        "storageKey": null,
        "args": null,
        "concreteType": "Todo",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "message",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "checked",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ToggleTodoMutation",
  "id": null,
  "text": "mutation ToggleTodoMutation(\n  $input: UpdateTodoInput!\n) {\n  updateTodo(input: $input) {\n    todo {\n      id\n      message\n      checked\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ToggleTodoMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ToggleTodoMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '63c54574fdb3330210aa362fb35b1b03';
module.exports = node;
