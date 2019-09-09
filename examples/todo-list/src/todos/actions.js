import { ajaxServices } from "../util/ajax-services"
import { validateTodo } from "./validation"
import { clearMessage, showError, showMessage } from "../root/actions"
import { todoForm } from "./todoForm"

const editTodo = (id, todo) => [
  { editing: todo.id },
  { [id]: todoForm.Initial(Object.assign({}, todo)) }
]

const cancelEditTodo = (id, todo) => [
  { editing: null },
  { [id]: todo.id ? undefined : todoForm.Initial() }
]

const updateList = todo => ({
  todos: todos => {
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
  }
})

export const Actions = update => ({
  editTodo: (id, todo) => update(editTodo(id, todo)),
  editingTodo: (id, field, value) => update({ [id]: { todo: { [field]: value } } }),
  cancelEditTodo: (id, todo) => update(cancelEditTodo(id, todo)),

  saveTodo: (id, todo) => {
    const validationErrors = validateTodo(todo)

    if (Object.keys(validationErrors).length === 0) {
      update([showMessage("Saving, please wait..."), { [id]: { validationErrors: () => ({}) } }])

      ajaxServices
        .saveTodo(todo)
        .then(updatedTodo => {
          update([updateList(updatedTodo), clearMessage(), cancelEditTodo(id, todo)])
        })
        .catch(() =>
          update([clearMessage(), showError("Sorry, an error occurred. Please try again.")])
        )
    } else {
      update({ [id]: { validationErrors: () => validationErrors } })
    }
  },

  deleteTodo: todo => {
    update(showMessage("Deleting, please wait..."))

    ajaxServices
      .deleteTodo(todo.id)
      .then(() => {
        update(
          Object.assign(
            {
              todos: todos => {
                todos.splice(todos.findIndex(t => t.id === todo.id), 1)
                return todos
              }
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
