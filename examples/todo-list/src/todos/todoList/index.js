import React, { Component } from "react"
import { Table } from "semantic-ui-react"

import { TodoItem } from "./todoItem"

export class TodoList extends Component {
  render() {
    const { model, actions } = this.props
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
          {model.todoIds.map(todoId => (
            <TodoItem key={`todoItem_${todoId}`} model={model} id={`todoItem:${todoId}`}
              todo={model.todos[todoId]} actions={actions} />
          ))}
        </Table.Body>
      </Table>
    )
  }
}
