import O from "patchinko/constant"

import { todoForm } from "./todoForm"

export const editTodo = todo =>
  Object.assign(
    {
      editing: true
    },
    todoForm.initialState(Object.assign({}, todo))
  )

export const cancelEdit = todo => (todo.id ? O : todoForm.initialState())

export const editingTodo = ({ field, value }) => ({ todo: O({ [field]: value }) })
