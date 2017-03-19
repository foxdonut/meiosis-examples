const flyd = require("flyd");
import { Promise } from "es6-promise";
import { Todo } from "../util";
import { todoStorage } from "../app/todo-storage";

export const actions = {
  deleteTodo: flyd.stream(),
  editTodo: flyd.stream(),
  setCompleted: flyd.stream()
};

export const intents = {
  deleteTodo: (todoId: string) => () => todoStorage.deleteTodoId(todoId).then(
    () => actions.deleteTodo(todoId)),

  editTodo: (todo: Todo) => () => actions.editTodo(todo),

  toggleTodo: (todoId: string) => evt => (checked =>
    todoStorage.setCompleted(todoId, checked).then(
      () => actions.setCompleted({ todoId, completed: checked })))(evt.target.checked)
};
