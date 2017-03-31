import { UpdateFunction, ViewFunction } from "meiosis";
import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { State } from "../util";

const info = h("footer.info", [
  h("p", "Double-click to edit a todo"),
  h("p", [
    h("span", "Meiosis - Created by "),
    h("a", { attrs: { href: "http://twitter.com/foxdonut00" } }, "foxdonut00")
  ]),
  h("p", [
    h("span", "Part of "),
    h("a", { attrs: { href: "http://todomvc.com" } }, "TodoMVC")
  ])
]);

export const createView = (components: any): ViewFunction =>
  (model: State) =>
    h("div", [
      h("section.todoapp", [
        components.header(model),
        components.main(model)
        // footerView(model, update, events)
      ]),
      info
    ]);
