import { Button } from "antd";
import h from "../util/jsnox-react";
import { actions } from "./actions";

export const view = (update, events) => todo =>
  h("span",
    h(Button, { type: "primary", onClick: actions.editTodo(update, todo) }, "Edit"),
    h(Button, { type: "danger", onClick: actions.deleteTodo(update, todo) }, "Delete")
  );
