import { Button } from "antd";
import h from "../util/jsnox-react";
import { intents } from "./actions";

export const todoItemView = todo => {
  return h("tr", { key: todo.id },
    h("td", String(todo.priority)),
    h("td", todo.description),
    h("td",
      h(Button, { type: "primary", onClick: intents.editTodo(todo) }, "Edit"),
      h(Button, { type: "danger", onClick: intents.deleteTodo(todo) }, "Delete")
    )
  );
};
