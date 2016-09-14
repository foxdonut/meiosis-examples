import initialModel from "./model";
import { createActions } from "./actions";
import receive from "./receive";

const todoListConfig = ({ActionForm, services, view, setup}) => ({
  initialModel,
  actions: createActions(ActionForm, services),
  receive,
  view,
  setup,
  ready: actions => actions.loadList()
});

export default todoListConfig;
