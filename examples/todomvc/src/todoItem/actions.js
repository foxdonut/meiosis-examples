import flyd from "flyd";
import { todoStorage } from "../app/todo-storage";

export const actions = {
  deleteTodo: flyd.stream(),
  editTodo: flyd.stream(),
  setCompleted: flyd.stream()
};

export const intents = {
  deleteTodo: todoId => () => todoStorage.deleteTodoId(todoId).then(
    () => actions.deleteTodo(todoId)),

  editTodo: todo => () => actions.editTodo(todo),

  toggleTodo: todoId => evt =>
    todoStorage.setCompleted(todoId, evt.target.checked).then(
      () => actions.setCompleted({ todoId, completed: evt.target.checked }))
};
