import { ChangeEvent } from "react";
import { Todo } from "../util";

export const createActions = (updates: any, events: any) => ({
  deleteTodo: (todoId: string) => () => events.deleteTodoId(todoId),
  editTodo: (todo: Todo) => () => updates.editTodo(todo),
  toggleTodo: (todoId: string) => (evt: ChangeEvent<HTMLInputElement>) =>
    events.setCompleted({ todoId, completed: evt.target.checked })
});
