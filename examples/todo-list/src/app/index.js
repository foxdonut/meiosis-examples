import React, { Component } from "react"

import { root, Root } from "../root"
import { todos } from "../todos"
import { ajaxServices } from "../util/ajax-services"

export const app = {
  initialState: () =>
    ajaxServices
      .loadTodos()
      .then(initialTodoList =>
        Object.assign({}, root.initialState(), todos.initialState(initialTodoList))
      ),

  actions: update => Object.assign({}, root.actions(update), todos.actions(update))
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = props.states()
    this.skippedFirst = false
  }

  componentDidMount() {
    this.props.states.map(state =>
      this.skippedFirst ? this.setState(state) : (this.skippedFirst = true)
    )
  }

  render() {
    const context = { root: this.state, state: this.state, path: [], lens: x => x }

    return <Root context={context} actions={this.props.actions} />
  }
}
