import { Menu } from "antd";
import h from "../util/jsnox-react";
import { nest } from "../util/nest";
import { todoForm } from "../todoForm/index-react";
import { todoList } from "../todoList/index-react";

const { Item } = Menu;

export const view = (update, events) => {
  // FIXME: events should be scoped
  const todoFormView = todoForm(nest(update, "form"), events);
  const todoListView = todoList(nest(update, "list"), events);

  return model => h("div",
    h(Menu, { mode: "horizontal", selectedKeys: ["react"] },
      h(Item, { key: "inferno" }, h("a[href=index-inferno.html]", "Inferno + JSX + Semantic")),
      h(Item, { key: "react" }, "React + JSnoX + ant design")
    ),
    h("div", [
      todoFormView(model.form),
      todoListView(model.list)
    ])
  );
};
