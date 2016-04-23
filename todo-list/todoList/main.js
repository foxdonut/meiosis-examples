import services from "./services";
import { actions, Action } from "./actions";
import { initialModel, update } from "./model";
import view from "./view.jsx";
import chain from "./chain";
import pipeline from "./pipeline";

const createTodoList = createComponent => createComponent({
  initialModel,
  actions: actions(services),
  view,
  update: update(Action),
  chain: chain(Action),
  pipeline: pipeline
});

export { createTodoList };
