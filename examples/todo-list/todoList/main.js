import services from "./services";
import { initialModel } from "./model";
import view from "./view.jsx";
import { actions, Action } from "./actions";
import receiveUpdate from "./receiveUpdate";
import nextUpdate from "./nextUpdate";

const todoListConfig = {
  initialModel,
  view,
  actions: actions(services),
  receiveUpdate,
  nextUpdate: nextUpdate(Action)
};

export default todoListConfig;
