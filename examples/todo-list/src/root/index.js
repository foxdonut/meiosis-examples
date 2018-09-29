import { actions, updates } from "./actions";
import { view } from "./view.jsx";
import { state } from "./state";
import { nextAction } from "./nextAction";
import { Todos } from "../todos";
import { TodoListPage } from "./constants";

export const Root = {
  dependencies: [
    { component: Todos, key: "todos", models: [""] }
  ],
  model: () => ({
    pageId: TodoListPage,
    message: ""
  }),
  actions,
  updates,
  view,
  state,
  nextAction
};
