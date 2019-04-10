import O from "patchinko/constant"

import { ajaxServices } from "../util/ajax-services"
import { validateTodo } from "./validation"
import { clearMessage, showError, showMessage } from "../root/patches"
import { clearForm, editingTodo, editTodo } from "./patches"

const updateList = todo => {
  return {
    todos: O(todos => {
      if (todos.length === 0) {
        todos.push(todo)
      } else {
        const idx = todos.findIndex(t => t.id === todo.id)
        if (idx >= 0) {
          todos.splice(idx, 1)
        }
        if (todos.length === 0 || todos[todos.length - 1].priority <= todo.priority) {
          todos.push(todo)
        } else {
          for (let i = 0; i < todos.length; i++) {
            if (todos[i].priority > todo.priority) {
              todos.splice(i, 0, todo)
              break
            }
          }
        }
      }
      return todos
    })
  }
}

const saveTodo = ({ root, local }) => todo => {
  const validationErrors = validateTodo(todo)

  if (Object.keys(validationErrors).length === 0) {
    root.update(showMessage("Saving, please wait..."))

    ajaxServices
      .saveTodo(todo)
      .then(updatedTodo => {
        root.update(
          Object.assign({}, updateList(updatedTodo), clearMessage(), local.lens(clearForm(todo)))
        )
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
    root.update(local.lens({ validationErrors }))
  }
}

const deleteTodo = ({ root }) => todo => {
  root.update(showMessage("Deleting, please wait..."))

  ajaxServices
    .deleteTodo(todo.id)
    .then(() => {
      root.update(
        Object.assign(
          {
            todos: O(todos => {
              todos.splice(todos.findIndex(t => t.id === todo.id), 1)
              return todos
            })
          },
          clearMessage()
        )
      )
    })
    .catch(() =>
      root.update(
        Object.assign({}, clearMessage(), showError("Sorry, an error occurred. Please try again."))
      )
    )
}

export const itemActions = ({ root, local }) => ({
  editTodo: todo => root.update(local.lens(editTodo(todo))),
  deleteTodo: deleteTodo({ root })
})

export const formActions = ({ root, local }) => ({
  editingTodo: ({ field, value }) => root.update(local.lens(editingTodo({ field, value }))),

  saveTodo: saveTodo({ root, local }),

  clearForm: todo => root.update(local.lens(clearForm(todo)))
})
