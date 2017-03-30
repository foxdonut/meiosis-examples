import * as m from "mithril";

import { State } from "../util";

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

export const createView = (components: any) =>
  (model: State) => m("div",
    m("section.todoapp",
      components.header(model)/*,
      components.main(model),
      components.footer(model),*/
    ),
    info
  );
