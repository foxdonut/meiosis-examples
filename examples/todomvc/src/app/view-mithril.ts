import * as m from "mithril";

import { State } from "../util";
import { view as footerView } from "../footer/view-mithril";
import { view as headerView } from "../header/view-mithril";
import { view as mainView } from "../main/view-mithril";

const info = m("footer.info", [
  m("p", "Double-click to edit a todo"),
  m("p", [
    m("span", "Meiosis - Mithril - Created by "),
    m("a", { href: "http://twitter.com/foxdonut00" }, "foxdonut00")
  ]),
  m("p", [
    m("span", "Part of "),
    m("a", { href: "http://todomvc.com" }, "TodoMVC")
  ])
]);

export const view = (model: State, update: Function, events: any) =>
  m("div", [
    m("section.todoapp", [
      headerView(model, update),
      mainView(model, update),
      footerView(model, update, events),
    ]),
    info
  ]);
