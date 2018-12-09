import React, { Component } from "react"
import { Table } from "semantic-ui-react"

import { TodoItem } from "./todoItem"

export class TodoList extends Component {
  render() {
    const { state, actions } = this.props
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
          {state.todoIds.map(todoId => (
            <TodoItem key={`todoItem_${todoId}`} state={state} id={`todoItem:${todoId}`}
              todo={state.todos[todoId]} actions={actions} />
          ))}
        </Table.Body>
      </Table>
    )
  }
}
