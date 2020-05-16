import React from "react"
import { Button, Table } from "semantic-ui-react"

import { TodoForm } from "../../todoForm"

export const TodoItem = ({ state, id, actions, todo }) => {
  const result = [
    <Table.Row key={todo.id}>
      <Table.Cell>{todo.priority}</Table.Cell>
      <Table.Cell>{todo.description}</Table.Cell>
      <Table.Cell>
        <Button primary basic size="mini" onClick={() => actions.editTodo(id, todo)}>
          Edit
        </Button>

        <Button negative basic size="mini" onClick={() => actions.deleteTodo(todo)}>
          Delete
        </Button>
      </Table.Cell>
    </Table.Row>
  ]
  if (state.editing === todo.id) {
    result.push(
      <Table.Row key={`${todo.id}_editing`}>
        <Table.Cell colSpan={3}>
          <TodoForm state={state} id={id} actions={actions} />
        </Table.Cell>
      </Table.Row>
    )
  }
  return result
}
