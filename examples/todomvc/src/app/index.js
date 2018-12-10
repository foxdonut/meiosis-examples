import { createFooter } from "../footer"
import { createHeader } from "../header"
import { createMain } from "../main"
import { createRouter } from "../router"
import { state } from "./state"

import { createActions } from "./actions"
import { createUpdates } from "./updates"
import { createView } from "./view"

import { todoStorage } from "./util/todo-storage"

todoStorage.loadAll().then(_todos => {
  /*
  const initialModel = {
    editTodo: {},
    newTodo: "",
    filterBy: "",
    todoIds: todos.map(todo => todo.id),
    todosById: todos.reduce((acc, todo) => {
      acc[todo.id] = todo
      return acc
    }, {})
  }
  */

  //const state = models.map(W(app.state))

  //const router = app.createRouter()
  //state.map(router.routeSync)
})

const createAppRouter = update => {
  const updates = createUpdates(update)
  const actions = createActions(updates)
  return createRouter(actions)
}

export const createApp = update => {
  const updates = createUpdates(update)
  const actions = createActions(updates)

  const components = {
    footer: createFooter(update, actions),
    header: createHeader(update),
    main: createMain(update, updates)
  }

  return {
    view: createView(components),
    state,
    createRouter: () => createAppRouter(update)
  }
}
