import O from "patchinko/constant"
import * as R from "ramda"

import { ajaxServices } from "../util/ajax-services"
import { todoForm } from "./todoForm"

const updateList = (todo, model) => {
  return {
    todos: O({ [todo.id]: todo }),
    todoIds: O(todoIds => {
      if (todoIds.length === 0) {
        todoIds.push(todo.id)
      }
      else {
        const idx = todoIds.indexOf(todo.id)
        if (idx >= 0) {
          todoIds.splice(idx, 1)
        }
        if (todoIds.length === 0 || model.todos[R.last(todoIds)].priority <= todo.priority) {
          todoIds.push(todo.id)
        }
        else {
          for (let i = 0; i < todoIds.length; i++) {
            if (model.todos[todoIds[i]].priority > todo.priority) {
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

export const actions = ({ update, patches }) => {
  return {
    editTodo: (id, todo) => update(Object.assign({},
      { [id]: O({ editing: true }) },
      { [`todoForm:${todo.id}`]: todoForm.model({ todo: Object.assign({}, todo) }) }
    )),

    cancelEditTodo: (id, todo) => update(Object.assign({},
      { [`todoItem:${todo.id}`]: O({ editing: false }) },
      patches.clearForm(id)
    )),

    saveTodo: (id, todo, model) => {
      update(patches.showMessage("Saving, please wait..."))

      return ajaxServices.saveTodo(todo)
        .then(todo => update(Object.assign({},
          updateList(todo, model),
          patches.clearMessage(),
          { [`todoItem:${todo.id}`]: O({ editing: false }) },
          patches.clearForm(id)
        )))
        .catch(() => update(Object.assign({},
          patches.clearMessage(),
          patches.showError("Sorry, an error occurred. Please try again.")
        )))
    },

    deleteTodo: todo => {
      update(patches.showMessage("Deleting, please wait..."))

      ajaxServices.deleteTodo(todo.id)
        .then(() => {
          update(Object.assign({
            todos: O({ [todo.id]: O }),
            todoIds: O(todoIds => {
              todoIds.splice(todoIds.indexOf(todo.id), 1)
              return todoIds
            })
          }, patches.clearMessage()))
        })
        .catch(() => update(Object.assign({},
          patches.clearMessage(),
          patches.showError("Sorry, an error occurred. Please try again.")
        )))
    }
  }
}
