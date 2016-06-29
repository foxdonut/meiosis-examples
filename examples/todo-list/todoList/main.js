import services from "./services";
import { initialModel } from "./model";
import view from "./view.jsx";
import { actions, Action } from "./actions";
import receive from "./receive";
import nextAction from "./nextAction";

const todoListConfig = {
  initialModel,
  view,
  actions: actions(services),
  receive,
  nextAction: nextAction(Action)
};

export default todoListConfig;
