import { Menu } from "antd";
import h from "../util/jsnox-react";
import { todoFormView } from "../todoForm/view-react";
import { todoListView } from "../todoList/view-react";

const { Item } = Menu;

export const view = model =>
  h("div",
    h(Menu, { mode: "horizontal", selectedKeys: ["react"] },
      h(Item, { key: "inferno" }, h("a[href=index-inferno.html]", "Inferno + JSX + Semantic")),
      h(Item, { key: "react" }, "React + JSnoX + ant design")
    ),
    h("div", [
      todoFormView(model.form),
      todoListView(model.list)
    ])
  );
