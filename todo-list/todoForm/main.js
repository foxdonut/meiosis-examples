import services from "./services";
import { actions, Action } from "./actions";
import { initialModel, update } from "./model";
import view from "./view.jsx";
import chain from "./chain";

const createTodoForm = createComponent => createComponent({
  initialModel,
  update: update(Action),
  actions: actions(services),
  view,
  chain: chain(Action)
});

export { createTodoForm };

