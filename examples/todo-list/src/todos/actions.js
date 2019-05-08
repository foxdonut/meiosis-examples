import O from "patchinko/constant"

import { ajaxServices } from "../util/ajax-services"
import { validateTodo } from "./validation"
import { clearMessage, showError, showMessage } from "../root/actions"
import { todoForm } from "./todoForm"

const editTodo = todo =>
  Object.assign(
    {
      editing: true
    },
    todoForm.initialState(Object.assign({}, todo))
  )

const cancelEditTodo = todo => (todo.id ? O : todoForm.initialState())

const updateList = todo => ({
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
})

export const actions = update => ({
  editTodo: (context, todo) => update(context.lens(editTodo(todo))),
  editingTodo: (context, field, value) => update(context.lens({ todo: O({ [field]: value }) })),
  cancelEditTodo: (context, todo) => update(context.lens(cancelEditTodo(todo))),

  saveTodo: (context, todo) => {
    const validationErrors = validateTodo(todo)

    if (Object.keys(validationErrors).length === 0) {
      update(showMessage("Saving, please wait..."))

      ajaxServices
        .saveTodo(todo)
        .then(updatedTodo => {
          update(
            Object.assign(
              {},
              updateList(updatedTodo),
              clearMessage(),
              context.lens(cancelEditTodo(todo))
            )
          )
        })
        .catch(() =>
          update(
            Object.assign(
              {},
              clearMessage(),
              showError("Sorry, an error occurred. Please try again.")
            )
          )
        )
    } else {
      update(context.lens({ validationErrors }))
    }
  },

  deleteTodo: (_context, todo) => {
    update(showMessage("Deleting, please wait..."))

    ajaxServices
      .deleteTodo(todo.id)
      .then(() => {
        update(
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
        update(
          Object.assign(
            {},
            clearMessage(),
            showError("Sorry, an error occurred. Please try again.")
          )
        )
      )
  }
})
