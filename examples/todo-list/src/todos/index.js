import React, { Component } from "react"

import { initialState } from "./initialState"
import { formActions } from "./actions"
import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"
import { lensProp } from "../util"

export const todos = {
  initialState
}

export class Todos extends Component {
  render() {
    const { root } = this.props
    const local = lensProp(root, "todoForm")

    return (
      <div>
        <TodoForm state={local.state} actions={formActions({ root, local })} label="New Todo:" />
        <TodoList root={root} />
      </div>
    )
  }
}
