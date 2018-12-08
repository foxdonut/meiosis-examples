import React, { Component } from "react"

import { root, Root } from "../root"
import { todos } from "../todos"
import { todoForm } from "../todos/todoForm"
import { ajaxServices } from "../util/ajax-services"

export const createApp = update => ajaxServices.loadTodos().then(initialTodoList => {
  const patches = Object.assign({},
    root.patches,
    todoForm.patches
  )

  const actionParams = { update, patches }
  const todosActions = todos.actions(actionParams)

  const actions = Object.assign({},
    root.actions(actionParams),
    todosActions,
    todoForm.actions(Object.assign({ actions: todosActions}, actionParams))
  )

  return {
    model: () => Object.assign({},
      root.model(),
      todos.model(initialTodoList)
    ),
    actions
  }
})

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = { model: props.states() }
    this.skippedFirst = false
  }

  componentDidMount() {
    this.props.states.map(model =>
      (this.skippedFirst) ? this.setState({ model }) : this.skippedFirst = true
    )
  }

  render() {
    const { model } = this.state
    const { actions } = this.props

    return (<Root model={model} actions={actions} />)
  }
}
