import O from "patchinko/constant"
import * as R from "ramda"

import { ajaxServices } from "../util/ajax-services"
import { todoForm } from "./todoForm"
import { validateTodo } from "./validation"
import { actions as rootActions } from "../root/actions"

const updateList = (todo, state) => {
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

export const actions = {
  clearForm: () => ({
    todo: { priority: "", description: "" },
    validationErrors: {}
  }),

  editingTodo: ({ field, value }) => ({ todo: O({ [field]: value }) }),

  editTodo: todo =>
    Object.assign(
      {
        editing: true
      },
      todoForm.initialState({ todo: Object.assign({}, todo) })
    ),

  cancelEditTodo: () =>
    Object.assign(
      {
        editing: false
      },
      actions.clearForm()
    ),

  saveTodo: ({ root, local, todo }) => {
    const validationErrors = validateTodo(todo)

    if (Object.keys(validationErrors).length === 0) {
      root.update(rootActions.showMessage("Saving, please wait..."))

      return ajaxServices
        .saveTodo(todo)
        .then(todo =>
          root.update(
            Object.assign(
              {},
              updateList(todo, root.state),
              rootActions.clearMessage(),
              // { [`todoItem:${todo.id}`]: O({ editing: false }) },
              actions.clearForm()
            )
          )
        )
        .catch(() =>
          root.update(
            Object.assign(
              {},
              rootActions.clearMessage(),
              rootActions.showError("Sorry, an error occurred. Please try again.")
            )
          )
        )
    } else {
      root.update({ validationErrors })
    }
  },

  deleteTodo: (update, todo) => {
    update(rootActions.showMessage("Deleting, please wait..."))

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
            rootActions.clearMessage()
          )
        )
      })
      .catch(() =>
        update(
          Object.assign(
            {},
            rootActions.clearMessage(),
            rootActions.showError("Sorry, an error occurred. Please try again.")
          )
        )
      )
  }
}
