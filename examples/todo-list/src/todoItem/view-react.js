import { Button } from "antd";
import h from "../util/jsnox-react";
import { intents } from "./actions";

export const todoItemActionsView = todo =>
  h("span",
    h(Button, { type: "primary", onClick: intents.editTodo(todo) }, "Edit"),
    h(Button, { type: "danger", onClick: intents.deleteTodo(todo) }, "Delete")
  );
