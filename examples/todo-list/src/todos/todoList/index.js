import React, { Component } from "react"
import { Table } from "semantic-ui-react"

import { TodoItem } from "./todoItem"
import { itemActions } from "../actions"
import { lensProp } from "../../util"

export class TodoList extends Component {
  render() {
    const { context } = this.props

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
          {context.state.todos.map(todo => {
            const key = `todoItem_${todo.id}`
            const itemContext = lensProp(context, key)

            return (
              <TodoItem
                key={key}
                context={itemContext}
                actions={itemActions(itemContext)}
                todo={todo}
              />
            )
          })}
        </Table.Body>
      </Table>
    )
  }
}
