import * as model from "./model";
import * as actions from "./actions";

/*
const todoListConfig = ({ActionForm, services, view, setup}) => ({
  initialModel,
  actions: createActions(ActionForm, services),
  receive,
  view,
  setup,
  ready: actions => actions.loadList()
});
*/

export const todoList = ({
  ...model,
  ...actions
});
