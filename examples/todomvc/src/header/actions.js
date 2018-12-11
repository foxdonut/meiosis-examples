import _ from "lodash"

import { todoStorage } from "../util/todo-storage"

const ENTER_KEY = 13

const patches = {
  editingNewTodo: title =>
    model => _.set(model, "newTodo", title),

  saveNewTodo: todo =>
    model => {
      model.todosById[todo.id] = todo
      model.todoIds.push(todo.id)
      model.newTodo = ""
      return model
    }
}

export const actions = ({ update }) => {
  const saveNewTodo = rawTitle => {
    const title = rawTitle.trim()

    if (title) {
      todoStorage.saveTodo({ title })
        .then(todo => update(patches.saveNewTodo(todo)))
    }
  }

  const newTodoKeyUp = evt => {
    if (evt.keyCode === ENTER_KEY) {
      saveNewTodo(evt.currentTarget.value)
    }
    else {
      update(patches.editingNewTodo(evt.currentTarget.value))
    }
  }

  const newTodoKeyUpEnterOnly = evt => {
    if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      saveNewTodo(evt.currentTarget.value)
    }
  }

  const newTodoChange = evt =>
    update(patches.editingNewTodo(evt.currentTarget.value))

  return {
    newTodoKeyUp,
    newTodoKeyUpEnterOnly,
    newTodoChange
  }
}
