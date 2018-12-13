import _ from "lodash"

import { patches } from "./patches"
import { todoStorage } from "../util/todo-storage"

const ENTER_KEY = 13
const ESCAPE_KEY = 27

export const actions = ({ update }) => ({
  loadAll: () => todoStorage.loadAll().then(todos => update(patches.displayTodos(todos))),

  clearCompleted: () => todoStorage.clearCompleted()
    .then(todos => update(patches.displayTodos(todos))),

  deleteTodo: todoId => () => todoStorage.deleteTodoId(todoId).then(
    () => update(state => {
      delete state.todosById[todoId]
      state.todoIds.splice(state.todoIds.indexOf(todoId), 1)
      return state
    })
  ),

  toggleAllTodos: evt =>
    todoStorage.setAllCompleted(evt.target.checked)
      .then(todos => update(patches.displayTodos(todos))),

  toggleTodo: todoId => evt => {
    const completed = evt.target.checked
    todoStorage.setCompleted(todoId, completed).then(
      () => update(state => _.set(state, ["todosById", todoId, "completed"], completed))
    )
  },

  newTodoKeyUp: evt => {
    if (evt.keyCode === ENTER_KEY) {
      const title = evt.target.value.trim()

      if (title) {
        todoStorage.saveTodo({ title })
          .then(todo => update(patches.saveNewTodo(todo)))
      }
    }
    else {
      update(patches.editingNewTodo(evt.target.value))
    }
  },

  editTodo: todo => evt => {
    update(state => _.set(state, "editTodo", todo))
    evt.target.parentElement.parentElement.getElementsByClassName("edit")[0].focus()
  },

  editBlur: editTodo => {
    if (editTodo.id) {
      editTodo.title = editTodo.title.trim()
      if (editTodo.title) {
        todoStorage.saveTodo(editTodo)
          .then(todo => update(patches.updateTodo(todo)))
      }
    }
  },

  editKeyUp: id => evt => {
    const title = evt.target.value

    if (evt.keyCode === ESCAPE_KEY) {
      update(state => _.set(state, "editTodo", { }))
    }
    else if (evt.keyCode === ENTER_KEY) {
      const todo = { id, title }
      const editing = !!todo.id
      todo.title = todo.title.trim()

      if (editing && todo.title) {
        todoStorage.saveTodo(todo)
          .then(updatedTodo => update(patches.updateTodo(updatedTodo)))
      }
    }
    else {
      update(state => _.set(state, "editTodo", { id, title }))
    }
  }
})
