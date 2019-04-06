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
      )
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
    const root = { state: this.state, update: this.props.update }

    return <Root root={root} />
  }
}
