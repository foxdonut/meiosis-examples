import React, { Component } from "react"

import { TodoItem } from "./todoItem"

export class TodoList extends Component {
  render() {
    const { model, actions } = this.props
    return (
      <table className="ui celled striped table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {model.todoIds.map(todoId => (
            <TodoItem key={`todoItem_${todoId}`} model={model} id={`todoItem:${todoId}`}
              todo={model.todos[todoId]} actions={actions} />
          ))}
        </tbody>
      </table>
    )
  }
}
