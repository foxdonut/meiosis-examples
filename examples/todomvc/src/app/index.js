import { root } from "../root"

import { todoStorage } from "../util/todo-storage"

export const loadInitialState = () => todoStorage.loadAll().then(todos => ({
  editTodo: {},
  newTodo: "",
  filterBy: "",
  todoIds: todos.map(todo => todo.id),
  todosById: todos.reduce((acc, todo) => {
    acc[todo.id] = todo
    return acc
  }, {})
}))

const service = model => [
  root.service
].reduce((x, f) => f(x)(x), model)

export const app = {
  actions: root.actions,
  view: root.view,
  service
}
