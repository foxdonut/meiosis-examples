import h from "../util/jsnox-react";
import { todoFormView } from "../todoForm/view-react";
import { todoListView } from "../todoList/view-react";

export const view = model =>
  h("div",
    h("ul.nav.nav-pills",
      h("li[role=presentation]",
        h("a.btn.btn-xs.btn-default[href=index-inferno.html]", "Inferno + JSX version")
      ),
      h("li.active[role=presentation]",
        h("a.btn.btn-xs.btn-default[href=index-react.html", "React + JSnoX version")
      )
    ),
    h("div.row",
      h("div.col-md-4",
        todoFormView(model.form)
      )
    ),
    todoListView(model.list)
  );
