import React from "react"

import { root, Root } from "../root"
import { todos } from "../todos"
import { ajaxServices } from "../util/ajax-services"

export const createApp = () =>
  ajaxServices.loadTodos().then(initialTodoList => ({
    initial: Object.assign({}, root.initial, todos.Initial(initialTodoList)),
    Actions: update => Object.assign({}, root.Actions(update), todos.Actions(update))
  }))

export const App = ({ states, actions }) => {
  const [init, setInit] = React.useState(false)
  const [state, setState] = React.useState(states())

  if (!init) {
    setInit(true)
    states.map(setState)
  }

  return <Root state={state} actions={actions} />
}
