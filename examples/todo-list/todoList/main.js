import services from "./services";
import { initialModel } from "./model";
import view from "./view.jsx";
import { actions, Action } from "./actions";
import receiveUpdate from "./receiveUpdate";
import nextUpdate from "./nextUpdate";

const createTodoList = createComponent => createComponent({
  initialModel,
  view,
  actions: actions(services),
  receiveUpdate,
  nextUpdate: nextUpdate(Action)
});

export { createTodoList };
