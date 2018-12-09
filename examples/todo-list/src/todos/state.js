import * as R from "ramda"

import { todoForm } from "./todoForm"

export const state = initialTodoList => {
  const todos = initialTodoList.reduce((result, todo) =>
    R.assoc(todo.id, todo, result), {})

  const todoIds = initialTodoList.map(R.prop("id"))

  return {
    todos,
    todoIds,
    todoForm: todoForm.state({ label: "New Todo:" })
  }
}
