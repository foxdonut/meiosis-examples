import React, { Component } from "react"
import { Button, Table } from "semantic-ui-react"

import { TodoForm } from "../../todoForm"
import { get } from "../../../util"

export class TodoItem extends Component {
  render() {
    const { context, actions, todo } = this.props
    const result = [
      <Table.Row key={todo.id}>
        <Table.Cell>{todo.priority}</Table.Cell>
        <Table.Cell>{todo.description}</Table.Cell>
        <Table.Cell>
          <Button primary basic size="mini" onClick={() => actions.editTodo(context, todo)}>
            Edit
          </Button>

          <Button negative basic size="mini" onClick={() => actions.deleteTodo(context, todo)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ]
    if (get(context.state, ["editing"])) {
      result.push(
        <Table.Row key={`${todo.id}_editing`}>
          <Table.Cell colSpan={3}>
            <TodoForm context={context} actions={actions} />
          </Table.Cell>
        </Table.Row>
      )
    }
    return result
  }
}
