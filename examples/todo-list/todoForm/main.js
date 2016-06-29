import services from "./services";
import { actions, Action } from "./actions";
import { initialModel } from "./model";
import view from "./view.jsx";
import nextAction from "./nextAction";

const todoFormConfig = {
  initialModel,
  view,
  actions: actions(services),
  nextAction: nextAction(Action)
};

export default todoFormConfig;
