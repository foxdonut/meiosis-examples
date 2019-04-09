import React, { Component } from "react"
import { Table } from "semantic-ui-react"

import { TodoItem } from "./todoItem"
import { lensProp } from "../../util"

export class TodoList extends Component {
  render() {
    const { root } = this.props

    return (
      <Table striped celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Priority</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {root.state.todos.map(todo => {
            const key = `todoItem_${todo.id}`
            return <TodoItem key={key} root={root} local={lensProp(root, key)} todo={todo} />
          })}
        </Table.Body>
      </Table>
    )
  }
}
