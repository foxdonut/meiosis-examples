import React, { Component } from "react"
import * as R from "ramda"

import { TodoForm } from "../../todoForm"

export class TodoItem extends Component {
  render() {
    const { model, id, todo, actions } = this.props
    const result = [
      <tr key={todo.id}>
        <td>{todo.priority}</td>
        <td>{todo.description}</td>
        <td>
          <button className="ui primary basic tiny button"
            onClick={() => actions.editTodo(id, todo)}>Edit</button>

          <button className="ui negative basic tiny button"
            onClick={() => actions.deleteTodo(todo)}>Delete</button>
        </td>
      </tr>
    ]
    if (R.path([id, "editing"], model)) {
      result.push(
        <tr key={`${todo.id}_editing`}>
          <td colSpan={3}>
            <TodoForm model={model} id={`todoForm:${todo.id}`} actions={actions} />
          </td>
        </tr>
      )
    }
    return result
  }
}
