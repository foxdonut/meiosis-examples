import _ from "lodash"

import { todoStorage } from "../util/todo-storage"

const ENTER_KEY = 13
const ESCAPE_KEY = 27

const patches = {
  updateTodo: todo => model => {
    model.todosById[todo.id] = todo
    model.editTodo = { }
    return model
  }
}

export const actions = ({ update }) => ({
  editBlur: id => evt =>
    todoStorage.saveTodo({ id, title: evt.target.value })
      .then(todo => update(patches.updateTodo(todo))),

  editKeyUp: id => evt => {
    const title = evt.target.value

    if (evt.keyCode === ESCAPE_KEY) {
      update(model => _.set(model, "editTodo", { }))
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
      update(model => _.set(model, "editTodo", { id, title }))
    }
  }
})
