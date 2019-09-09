import React, { Component } from "react"

import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"

export class Todos extends Component {
  render() {
    const { state, actions } = this.props

    return (
      <div>
        <TodoForm state={state} actions={actions} id="todoForm" label="New Todo:" />
        <TodoList state={state} actions={actions} />
      </div>
    )
  }
}
