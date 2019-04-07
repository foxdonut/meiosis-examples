import O from "patchinko/constant"
import * as R from "ramda"

import { ajaxServices } from "../util/ajax-services"
import { todoForm } from "./todoForm"
import { validateTodo } from "./validation"
import { clearMessage, showError, showMessage } from "../root/actions"

export const updateList = (todo, state) => {
  return {
    todos: O({ [todo.id]: todo }),
    todoIds: O(todoIds => {
      if (todoIds.length === 0) {
        todoIds.push(todo.id)
      } else {
        const idx = todoIds.indexOf(todo.id)
        if (idx >= 0) {
          todoIds.splice(idx, 1)
        }
        if (todoIds.length === 0 || state.todos[R.last(todoIds)].priority <= todo.priority) {
          todoIds.push(todo.id)
        } else {
          for (let i = 0; i < todoIds.length; i++) {
            if (state.todos[todoIds[i]].priority > todo.priority) {
              todoIds.splice(i, 0, todo.id)
              break
            }
          }
        }
      }
      return todoIds
    })
  }
}

export const editTodo = todo =>
  Object.assign(
    {
      editing: true
    },
    todoForm.initialState(Object.assign({}, todo))
  )

export const clearForm = ({ local }) => local.update(todoForm.initialState())

export const editingTodo = ({ local, field, value }) =>
  local.update({ todo: O({ [field]: value }) })

export const saveTodo = ({ root, local, actions, todo }) => {
  const validationErrors = validateTodo(todo)

  if (Object.keys(validationErrors).length === 0) {
    root.update(showMessage("Saving, please wait..."))

    return ajaxServices
      .saveTodo(todo)
      .then(todo => {
        root.update(Object.assign({}, updateList(todo, root.state), clearMessage()))
        actions.clearForm({ local })
      })
      .catch(() =>
        root.update(
          Object.assign(
            {},
            clearMessage(),
            showError("Sorry, an error occurred. Please try again.")
          )
        )
      )
  } else {
    local.update({ validationErrors })
  }
}

export const deleteTodo = (update, todo) => {
  update(showMessage("Deleting, please wait..."))

  ajaxServices
    .deleteTodo(todo.id)
    .then(() => {
      update(
        Object.assign(
          {
            todos: O({ [todo.id]: O }),
            todoIds: O(todoIds => {
              todoIds.splice(todoIds.indexOf(todo.id), 1)
              return todoIds
            })
          },
          clearMessage()
        )
      )
    })
    .catch(() =>
      update(
        Object.assign({}, clearMessage(), showError("Sorry, an error occurred. Please try again."))
      )
    )
}

export const formActions = {
  editingTodo,
  saveTodo,
  clearForm
}

export const itemFormActions = Object.assign({}, formActions, {
  clearForm: ({ local }) => local.update(O)
})
