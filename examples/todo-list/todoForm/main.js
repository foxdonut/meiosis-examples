import services from "./services";
import { actions, Action } from "./actions";
import { initialModel } from "./model";
import view from "./view.jsx";
import nextUpdate from "./nextUpdate";

const createTodoForm = createComponent => createComponent({
  initialModel,
  view,
  actions: actions(services),
  nextUpdate: nextUpdate(Action)
});

export { createTodoForm };
