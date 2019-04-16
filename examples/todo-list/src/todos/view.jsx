import React, { Component } from "react"

import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"
import { lensProp } from "../util"

export class Todos extends Component {
  render() {
    const { context, actions } = this.props

    return (
      <div>
        <TodoForm context={lensProp(context, "todoForm")} actions={actions} label="New Todo:" />
        <TodoList context={context} actions={actions} />
      </div>
    )
  }
}
