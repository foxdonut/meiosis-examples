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

  return {
    state: () => Object.assign({},
      root.state(),
      todos.state(initialTodoList)
    ),
    actions: Object.assign({},
      root.actions(actionParams),
      todos.actions(actionParams),
      todoForm.actions(actionParams)
    )
  }
})

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = props.states()
    this.skippedFirst = false
  }

  componentDidMount() {
    this.props.states.map(state =>
      (this.skippedFirst) ? this.setState(state) : this.skippedFirst = true
    )
  }

  render() {
    const state = this.state
    const { actions } = this.props

    return (<Root state={state} actions={actions} />)
  }
}
