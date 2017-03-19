import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { State } from "../util";
import { intents } from "./actions";
import { view as todoItemView } from "../todoItem/view-snabbdom";

export const view = (model: State, update: Function) =>
  h("section.main", [
    h("input.toggle-all", {
      attrs: { type: "checkbox" },
      props: { checked: model.allCompleted },
      on: { change: intents.toggleAllTodos }
    }),
    h("label", { attrs: { for: "toggle-all"} }, "Mark all as complete"),
    h("ul.todo-list", model.todoIds.map(todoItemView(model, update)))
  ]);
