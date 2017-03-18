import h from "snabbdom/h";
import { VNode } from "snabbdom/vnode";

import { Model } from "../util";
import { footerView } from "../footer/view-snabbdom";
import { headerView } from "../header/view-snabbdom";
import { mainView } from "../main/view-snabbdom";

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

export const view = (model: Model) =>
  h("div", [
    h("section.todoapp", [
      headerView(model),
      mainView(model),
      footerView(model),
    ]),
    info
  ]);
