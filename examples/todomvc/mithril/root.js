import m from "mithril";
import { createHeader } from "./header";
import { createMain } from "./main";
import { createFooter } from "./footer";

export const createRoot = propose => {
  const info = m("footer.info", [
    m("p", "Double-click to edit a todo"),
    m("p",
      m("span", "Meiosis - Mithril - Created by "),
      m("a", { href: "http://twitter.com/foxdonut00" }, "foxdonut00")
    ),
    m("p",
      m("span", "Part of "),
      m("a", { href: "http://todomvc.com" }, "TodoMVC")
    )
  ]);

  const header = createHeader(propose);
  const main = createMain(propose);
  const footer = createFooter(propose);

  return model =>
    m("div",
      m("section.todoapp",
        header(model),
        main(model),
        footer(model),
        info
      )
    );
};
