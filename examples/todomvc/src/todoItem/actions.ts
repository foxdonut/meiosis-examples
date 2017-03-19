const flyd = require("flyd");
import { ChangeEvent, EventHandler } from "react";
import { Promise } from "es6-promise";
import { Todo } from "../util";
import { todoStorage } from "../app/todo-storage";

export const actions = {
  deleteTodo: flyd.stream(),
  editTodo: flyd.stream(),
  setCompleted: flyd.stream()
};

const toggleTodo: (todoId: string) => EventHandler<ChangeEvent<HTMLInputElement>> = (todoId: string) => (evt: ChangeEvent<HTMLInputElement>) =>
  (checked =>
    todoStorage.setCompleted(todoId, checked).then(
      () => actions.setCompleted({ todoId, completed: checked })))(evt.target.checked)

export const intents = {
  deleteTodo: (todoId: string) => () => todoStorage.deleteTodoId(todoId).then(
    () => actions.deleteTodo(todoId)),

  editTodo: (todo: Todo) => () => actions.editTodo(todo),

  toggleTodo
};
