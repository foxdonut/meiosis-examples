import { Layout, Menu } from "antd";
import h from "../util/jsnox-react";
import { todoFormView } from "../todoForm/view-react";
import { todoListView } from "../todoList/view-react";

const { Content, Header } = Layout;
const { Item } = Menu;

export const view = model =>
  h("div",
    h(Layout,
      h(Header,
        h(Menu, { mode: "horizontal" },
          h(Item, { key: "inferno" },
            h("a[href=index-inferno.html]", "Inferno + JSX version")
          ),
          h(Item, { key: "react" },
            h("a[href=index-react.html", "React + JSnoX version")
          )
        )
      ),
      h(Content, [
        todoFormView(model.form),
        todoListView(model.list)
      ])
    )
  );
