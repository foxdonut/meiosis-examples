import React, { Component } from "react"

import { model } from "./model"
import { effects } from "./effects"
import { actions } from "./actions"
import { TodoForm } from "./todoForm"
import { TodoList } from "./todoList"

export const todos = {
  model,
  effects,
  actions
}

export class Todos extends Component {
  render() {
    const { model, actions } = this.props
    return (
      <div>
        <TodoForm model={model} actions={actions} id="todoForm" />
        <TodoList model={model} actions={actions} />
      </div>
    )
  }
}
