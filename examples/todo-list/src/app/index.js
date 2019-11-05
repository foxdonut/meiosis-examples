import React, { Component } from "react"

import { root, Root } from "../root"
import { todos } from "../todos"
import { ajaxServices } from "../util/ajax-services"

export const createApp = () =>
  ajaxServices.loadTodos().then(initialTodoList => ({
    initial: Object.assign({}, root.initial, todos.Initial(initialTodoList)),
    Actions: update => Object.assign({}, root.Actions(update), todos.Actions(update))
  }))

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
    const state = this.state
    const { actions } = this.props

    return <Root state={state} actions={actions} />
  }
}
