import { P } from "patchinko/explicit"

import { root } from "../root"
import { router } from "../router"
import { todoStorage } from "../util/todo-storage"

export const loadInitialState = () => todoStorage.loadAll().then(todos => P({
  editTodo: {},
  newTodo: "",
  filterBy: "all",
  todoIds: todos.map(todo => todo.id),
  todosById: todos.reduce((acc, todo) => {
    acc[todo.id] = todo
    return acc
  }, {})
}, router.parseUrl()))

const service = state => [
  root.service,
  router.service
].reduce((x, f) => P(x, f(x)), state)

export const app = {
  actions: root.actions,
  view: root.view,
  service
}
