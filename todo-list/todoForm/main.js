import services from "./services";
import { actions, Action } from "./actions";
import { initialModel, update } from "./model";
import view from "./view.jsx";
import chain from "./chain";

const createTodoForm = createComponent => createComponent({
  initialModel,
  actions: actions(services),
  view,
  update: update(Action),
  chain: chain(Action)
});

export { createTodoForm };

