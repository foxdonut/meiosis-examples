import services from "./services";
import { initialModel } from "./model";
import view from "./view.jsx";
import { actions } from "./actions";
import receive from "./receive";

const todoListConfig = {
  initialModel,
  view,
  actions: actions(services),
  receive
};

export default todoListConfig;
