import * as _ from "lodash"

import { todoStorage } from "../util"

export const createUpdates = (update: UpdateFunction) => ({
  deleteTodoId: (todoId: string) => update((model: Model) => {
    delete model.todosById[todoId]
    model.todoIds.splice(model.todoIds.indexOf(todoId), 1)
    return model
  }),

  editTodo: (todo: Todo) => update((model: Model) =>
    _.set(model, "editTodo", todo)),

  setCompleted: (todoId: string, completed: boolean) => update((model: Model) =>
    _.set(model, ["todosById", todoId, "completed"], completed))
})

export const createActions = (updates: any) => ({
  deleteTodo: (todoId: string) => () => todoStorage.deleteTodoId(todoId).then(
    () => updates.deleteTodoId(todoId)
  ),

  editTodo: (todo: Todo) => () => updates.editTodo(todo),

  toggleTodo: (todoId: string) => (evt: any) =>
    todoStorage.setCompleted(todoId, evt.target.checked).then(
      (data: any) => updates.setCompleted(todoId, evt.target.checked)
    )
})
