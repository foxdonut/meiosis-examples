import classnames from "classnames";
import { state } from "./state";

export const getTodoClassMap = (model, todo) => ({
  "completed": todo.completed,
  "editing": state.editing(model, todo)
});

export const getTodoClasses = (model, todo) =>
  classnames(getTodoClassMap(model, todo));
