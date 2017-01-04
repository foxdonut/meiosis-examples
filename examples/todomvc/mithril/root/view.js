import m from "mithril";
import { header } from "../header/view";
import { main } from "../main/view";
import { footer } from "../footer/view";

export const view = model => {
  const info = m("footer.info", [
    m("p", "Double-click to edit a todo"),
    m("p", [m("span", "Meiosis - Mithril - Created by "), m("a", {href: "http://twitter.com/foxdonut00"}, "foxdonut00")]),
    m("p", [m("span", "Part of "), m("a", {href: "http://todomvc.com"}, "TodoMVC")])
  ]);

  return m("div",
    m("section.todoapp",
      header(model),
      main(model),
      footer(model),
      info
    )
  );
};
