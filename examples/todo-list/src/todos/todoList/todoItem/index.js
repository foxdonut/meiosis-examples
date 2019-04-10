import React, { Component } from "react"
import { Button, Table } from "semantic-ui-react"

import { TodoForm } from "../../todoForm"
import { formActions } from "../../actions"
import { get } from "../../../util"

export class TodoItem extends Component {
  render() {
    const { root, local, actions, todo } = this.props
    const result = [
      <Table.Row key={todo.id}>
        <Table.Cell>{todo.priority}</Table.Cell>
        <Table.Cell>{todo.description}</Table.Cell>
        <Table.Cell>
          <Button primary basic size="mini" onClick={() => actions.editTodo(todo)}>
            Edit
          </Button>

          <Button negative basic size="mini" onClick={() => actions.deleteTodo(todo)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ]
    if (get(local.state, ["editing"])) {
      result.push(
        <Table.Row key={`${todo.id}_editing`}>
          <Table.Cell colSpan={3}>
            <TodoForm state={local.state} actions={formActions({ root, local })} />
          </Table.Cell>
        </Table.Row>
      )
    }
    return result
  }
}
