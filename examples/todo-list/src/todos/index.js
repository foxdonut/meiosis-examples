import React, { Component } from "react"

import { initialState } from "./initialState"
import { actions } from "./actions"
import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"
import { lensProp } from "../util"

export const todos = {
  initialState,
  actions
}

export class Todos extends Component {
  render() {
    const { root } = this.props
    return (
      <div>
        <TodoForm root={root} local={lensProp(root, "todoForm")} />
        <TodoList root={root} />
      </div>
    )
  }
}
