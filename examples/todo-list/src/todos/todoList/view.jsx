import React from "react"
import { Table } from "semantic-ui-react"

import { TodoItem } from "./todoItem"

export const TodoList = ({ state, actions }) => (
  <Table striped celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Priority</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
        <Table.HeaderCell>Action</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
    <Table.Body>
      {state.todos.map(todo => {
        const key = `todoItem_${todo.id}`

        return (
          <TodoItem
            key={key}
            state={state}
            id={`todoItem:${todo.id}`}
            actions={actions}
            todo={todo}
          />
        )
      })}
    </Table.Body>
  </Table>
)
