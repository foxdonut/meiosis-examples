import h from "../util/jsnox-react";
import { todoFormView } from "../todoForm/view-react";
import { todoListView } from "../todoList/view-react";

export const view = model =>
  h("div",
    h("div", h("span", "React + JSnoX | "), h("a", { href: "index-inferno.html" }, "Inferno + JSX")),
    h("div.row",
      h("div.col-md-4",
        todoFormView(model.form)
      )
    ),
    todoListView(model.list)
  );
