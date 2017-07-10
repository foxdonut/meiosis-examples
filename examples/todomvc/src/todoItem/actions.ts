import { Promise } from "es6-promise";
import { Todo, todoStorage } from "../util";

export const createActions = (updates: any) => ({
  deleteTodo: (todoId: string) => () => todoStorage.deleteTodoId(todoId).then(
    () => updates.deleteTodoId(todoId)
  ),

  editTodo: (todo: Todo) => () => updates.editTodo(todo),

  toggleTodo: (todoId: string) => (evt: any) =>
    todoStorage.setCompleted(todoId, evt.target.checked).then(
      (data: any) => updates.setCompleted(todoId, evt.target.checked)
    )
});
