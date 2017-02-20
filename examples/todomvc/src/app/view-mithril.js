import m from "mithril";
import { headerView } from "../header/view-mithril";
import { mainView } from "../main/view-mithril";
import { footerView } from "../footer/view-mithril";

const info = m("footer.info",
  m("p", "Double-click to edit a todo"),
  m("p",
    m("span", "Meiosis - Mithril - Created by "),
    m("a", { href: "http://twitter.com/foxdonut00" }, "foxdonut00")
  ),
  m("p",
    m("span", "Part of "),
    m("a", { href: "http://todomvc.com" }, "TodoMVC")
  )
);

export const view = model =>
  m("div",
    m("section.todoapp",
      headerView(model),
      mainView(model),
      footerView(model),
      info
    )
  );
