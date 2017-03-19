import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { State } from "../util";
import { view as footerView } from "../footer/view-snabbdom";
import { view as headerView } from "../header/view-snabbdom";
import { view as mainView } from "../main/view-snabbdom";

const info = h("footer.info", [
  h("p", "Double-click to edit a todo"),
  h("p", [
    h("span", "Meiosis - Mithril - Created by "),
    h("a", { attrs: { href: "http://twitter.com/foxdonut00" } }, "foxdonut00")
  ]),
  h("p", [
    h("span", "Part of "),
    h("a", { attrs: { href: "http://todomvc.com" } }, "TodoMVC")
  ])
]);

export const view = (model: State, update: Function) =>
  h("div", [
    h("section.todoapp", [
      headerView(model, update),
      mainView(model, update),
      footerView(model),
    ]),
    info
  ]);
