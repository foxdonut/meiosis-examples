import React, { Component } from "react"

import { root, Root } from "../root"
import { todos } from "../todos"
import { ajaxServices } from "../util/ajax-services"

export const app = {
  Initial: () =>
    ajaxServices
      .loadTodos()
      .then(initialTodoList => Object.assign({}, root.Initial(), todos.Initial(initialTodoList))),

  Actions: update => Object.assign({}, root.Actions(update), todos.Actions(update))
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
