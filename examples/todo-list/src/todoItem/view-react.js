import { Button } from "antd";
import h from "../util/jsnox-react";

export const view = ({ actions }) => todo =>
  h("span",
    h(Button, { type: "primary", onClick: actions.editTodo(todo) }, "Edit"),
    h(Button, { type: "danger", onClick: actions.deleteTodo(todo) }, "Delete")
  );
