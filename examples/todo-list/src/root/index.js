import { actions, updates } from "./actions";
import { view } from "./view.jsx";
import { state } from "./state";
import { nextAction } from "./nextAction";
import { Todos } from "../todos";
import { Projects } from "../projects";
import { TodoListPage } from "./constants";

export const Root = {
  dependencies: {
    todos: Todos,
    projects: Projects
  },
  model: data => Object.assign({
    pageId: TodoListPage,
    message: ""
  }, Todos.model(data)),
  actions,
  updates,
  view,
  state,
  nextAction
};
