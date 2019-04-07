import React, { Component } from "react"
import { Button, Table } from "semantic-ui-react"
import * as R from "ramda"

import { TodoForm } from "../../todoForm"
import { deleteTodo, editTodo, itemFormActions } from "../../actions"

export class TodoItem extends Component {
  render() {
    const { root, local, todo } = this.props
    const result = [
      <Table.Row key={todo.id}>
        <Table.Cell>{todo.priority}</Table.Cell>
        <Table.Cell>{todo.description}</Table.Cell>
        <Table.Cell>
          <Button primary basic size="mini" onClick={() => local.update(editTodo(todo))}>
            Edit
          </Button>

          <Button negative basic size="mini" onClick={() => deleteTodo(root.update, todo)}>
            Delete
          </Button>
        </Table.Cell>
      </Table.Row>
    ]
    if (R.prop("editing", local.state)) {
      result.push(
        <Table.Row key={`${todo.id}_editing`}>
          <Table.Cell colSpan={3}>
            <TodoForm root={root} local={local} actions={itemFormActions} />
          </Table.Cell>
        </Table.Row>
      )
    }
    return result
  }
}
