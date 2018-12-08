import O from "patchinko/constant"

import { ajaxServices } from "../util/ajax-services"
//import { showMessage, clearMessage, showError } from "../util/ui"
import { todoForm } from "./todoForm"

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

    deleteTodo: todo => {
      //showMessage("Deleting, please wait...")

      ajaxServices.deleteTodo(todo.id)
        .then(() => {
          update({
            todos: O({ [todo.id]: O }),
            todoIds: O(todoIds => {
              todoIds.splice(todoIds.indexOf(todo.id), 1)
              return todoIds
            })
          })
          //clearMessage()
        })
        .catch(() => update(Object.assign({},
          //clearMessage(),
          //showError("Sorry, an error occurred. Please try again.")
        )))
    }
  }
}
