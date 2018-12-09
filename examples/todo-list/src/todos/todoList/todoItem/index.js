import React, { Component } from "react"
import { Button, Table } from "semantic-ui-react"
import * as R from "ramda"

import { TodoForm } from "../../todoForm"

export class TodoItem extends Component {
  render() {
    const { state, id, todo, actions } = this.props
    const result = [
      <Table.Row key={todo.id}>
        <Table.Cell>{todo.priority}</Table.Cell>
        <Table.Cell>{todo.description}</Table.Cell>
        <Table.Cell>
          <Button primary basic size="mini"
            onClick={() => actions.editTodo(id, todo)}>Edit</Button>

          <Button negative basic size="mini"
            onClick={() => actions.deleteTodo(todo)}>Delete</Button>
        </Table.Cell>
      </Table.Row>
    ]
    if (R.path([id, "editing"], state)) {
      result.push(
        <Table.Row key={`${todo.id}_editing`}>
          <Table.Cell colSpan={3}>
            <TodoForm state={state} id={`todoForm:${todo.id}`} actions={actions} />
          </Table.Cell>
        </Table.Row>
      )
    }
    return result
  }
}
