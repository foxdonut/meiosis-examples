import React, { Component } from "react"

import { state } from "./state"
import { actions } from "./actions"
import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"

export const todos = {
  state,
  actions
}

export class Todos extends Component {
  render() {
    const { state, actions } = this.props
    return (
      <div>
        <TodoForm state={state} actions={actions} id="todoForm" />
        <TodoList state={state} actions={actions} />
      </div>
    )
  }
}
