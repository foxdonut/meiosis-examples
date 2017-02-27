import h from "../util/jsnox-react";
import { intents } from "./actions";

export const todoItemView = todo => {
  return h("tr", { key: todo.id },
    h("td", String(todo.priority)),
    h("td", todo.description),
    h("td",
      h("button.btn.btn-primary.btn-xs", { onClick: intents.editTodo(todo) }, "Edit"),
      h("button.btn.btn-danger.btn-xs", { onClick: intents.deleteTodo(todo) }, "Delete")
    )
  );
};
