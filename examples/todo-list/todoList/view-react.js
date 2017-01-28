import h from "../util/jsnox-react";
import { todoItemView } from "../todoItem/view-react";

export const todoListView = (model, actions) => {
  const renderTodo = todoItemView(actions);

  return h("div.row",
    h("div.col-md-8",
      h("div", "Todo List: " + model.message),
      h("table.table.table-bordered.table-striped.table-hover",
        h("thead",
          h("tr",
            h("th", "Priority"),
            h("th", "Description"),
            h("th", "Action")
          )
        ),
        h("tbody", model.todos.map(renderTodo))
      )
    )
  );
};
