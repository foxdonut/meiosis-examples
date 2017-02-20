import h from "snabbdom/h";

import { intents } from "./actions";
import { todoItemView } from "../todoItem/view-snabbdom";

export const mainView = model =>
  h("section.main", [
    h("input.toggle-all", {
      attrs: { type: "checkbox" },
      props: { checked: model.allCompleted },
      on: { change: intents.toggleAllTodos }
    }),
    h("label", { attrs: { for: "toggle-all"} }, "Mark all as complete"),
    h("ul.todo-list", model.filteredTodos.map(todoItemView(model)))
  ]);
