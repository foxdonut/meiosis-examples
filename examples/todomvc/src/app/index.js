//import O from "patchinko/constant"

import { root } from "../root"
import { main } from "../main"
import { header } from "../header"
import { todoItem } from "../todoItem"
import { todoEdit } from "../todoEdit"

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

const patches = Object.assign({},
  root.patches
  // could have more patches here
)

const actions = update => {
  const actionParams = ({ update, patches })
  return Object.assign({},
    root.actions(actionParams),
    main.actions(actionParams),
    header.actions(actionParams),
    todoItem.actions(actionParams),
    todoEdit.actions(actionParams)
  )
}

const service = model => [
  root.service
//].reduce((x, f) => O(x, f(x)), model)
].reduce((x, f) => f(x)(x), model)

export const app = {
  actions,
  view: root.view,
  service
}
