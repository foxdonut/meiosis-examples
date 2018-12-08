import O from "patchinko/constant"
import * as R from "ramda"

import { ajaxServices } from "../util/ajax-services"
import { showMessage, clearMessage, showError } from "../util/ui"

const updateList = (todo, model) => {
  return {
    todos: O({ [todo.id]: todo }),
    todoIds: O(todoIds => {
      const idx = todoIds.indexOf(todo.id)
      if (idx >= 0) {
        todoIds.splice(idx, 1)
      }
      if (model.todos[R.last(model.todoIds)].priority <= todo.priority) {
        todoIds.push(todo.id)
      }
      else {
        for (let i = 0; i < model.todoIds.length; i++) {
          if (model.todos[model.todoIds[i]].priority > todo.priority) {
            todoIds.splice(i, 0, todo.id)
            break
          }
        }
      }
      return todoIds
    })
  }
}

export const effects = ({ update, patches }) => ({
  saveTodo: (id, todo, model) => {
    showMessage("Saving, please wait...")

    return ajaxServices.saveTodo(todo)
      .then(todo => update(Object.assign({},
        updateList(todo, model),
        clearMessage(),
        { [`todoItem:${todo.id}`]: O({ editing: false }) },
        patches.clearForm(id)
      )))
      .catch(() => update(Object.assign({},
        clearMessage(),
        showError("Sorry, an error occurred. Please try again.")
      )))
  }
})
