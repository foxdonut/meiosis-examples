import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { State } from "../util";

export const createView = (actions: any, components: any) => (model: State) =>
  h("section.main", [
    h("input.toggle-all", {
      attrs: { type: "checkbox" },
      on: { change: actions.toggleAllTodos },
      props: { checked: model.allCompleted }
    }),
    h("label", { attrs: { for: "toggle-all"} }, "Mark all as complete"),
    h("ul.todo-list", model.todoIds.map(components.todoItem.view(model)))
  ]);
