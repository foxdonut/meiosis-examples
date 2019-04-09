import React, { Component } from "react"
import { Button, Table } from "semantic-ui-react"

import { TodoForm } from "../../todoForm"
import { deleteTodo, editTodo, formActions } from "../../actions"
import { get } from "../../../util"

export class TodoItem extends Component {
  render() {
    const { root, local, todo } = this.props
    const result = [
      <Table.Row key={todo.id}>
        <Table.Cell>{todo.priority}</Table.Cell>
        <Table.Cell>{todo.description}</Table.Cell>
        <Table.Cell>
          <Button primary basic size="mini" onClick={() => root.update(local.lens(editTodo(todo)))}>
            Edit
          </Button>

          <Button negative basic size="mini" onClick={() => deleteTodo({ root, todo })}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ]
    if (get(local.state, ["editing"])) {
      result.push(
        <Table.Row key={`${todo.id}_editing`}>
          <Table.Cell colSpan={3}>
            <TodoForm root={root} local={local} actions={formActions} />
          </Table.Cell>
        </Table.Row>
      )
    }
    return result
  }
}
