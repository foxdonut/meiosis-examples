import classnames from "classnames";
import { state } from "./state";

export const getTodoClasses = (model, todo) =>
  classnames({
    "completed": todo.completed,
    "editing": state.editing(model, todo)
  });
