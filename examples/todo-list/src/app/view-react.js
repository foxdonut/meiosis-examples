import { Menu } from "antd";
import h from "../util/jsnox-react";
import { nest } from "../util/nest";
import { todoForm } from "../todoForm/index-react";
import { todoList } from "../todoList/index-react";

const { Item } = Menu;

export const view = (model, update, events) =>
  h("div",
    h(Menu, { mode: "horizontal", selectedKeys: ["react"] },
      h(Item, { key: "inferno" }, h("a[href=index-inferno.html]", "Inferno + JSX + Semantic")),
      h(Item, { key: "react" }, "React + JSnoX + ant design")
    ),
    h("div", [
      todoForm.view(model.form, nest(update, "form"), events),
      todoList.view(model.list, nest(update, "list"), events)
    ])
  );
