import services from "./services";
import { actions, Action } from "./actions";
import { initialModel, transform } from "./model";
import view from "./view.jsx";
import chain from "./chain";
import receivers from "./receivers";

const createTodoList = createComponent => createComponent({
  initialModel,
  actions: actions(services),
  view,
  transform: transform(Action),
  chain: chain(Action),
  receivers
});

export { createTodoList };
