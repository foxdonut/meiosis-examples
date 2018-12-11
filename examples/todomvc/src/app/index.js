import { patches } from "./patches"
import { actions } from "./actions"
import { view } from "./view"
import { service } from "./service"

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

//const state = models.map(W(app.state))

//const router = app.createRouter()
//state.map(router.routeSync)

/*
const createAppRouter = update => {
  const updates = createUpdates(update)
  const actions = createActions(updates)
  return createRouter(actions)
}
*/

export const app = {
  patches,
  actions,
  view,
  service
}
