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
    const { context } = this.props
    const formContext = lensProp(context, "todoForm")

    return (
      <div>
        <TodoForm
          state={formContext.local.state}
          actions={formActions(formContext)}
          label="New Todo:"
        />
        <TodoList context={context} />
      </div>
    )
  }
}
