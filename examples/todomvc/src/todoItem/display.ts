import * as classnames from "classnames";
import { Model, Todo } from "../util";
import { state } from "./state";

export const getTodoClassMap = (model: Model, todo: Todo) => ({
  "completed": todo.completed,
  "editing": state.editing(model, todo)
});

export const getTodoClasses = (model: Model, todo: Todo) =>
  classnames(getTodoClassMap(model, todo));
