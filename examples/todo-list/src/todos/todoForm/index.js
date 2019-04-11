import React, { Component } from "react"
import preventDefault from "prevent-default"
import { Button, Form, Label } from "semantic-ui-react"

import { initialState } from "./initialState"

export const todoForm = {
  initialState
}

const InputDiv = ({ state, actions, field, label }) => {
  const errors = state.validationErrors[field] || []

  return (
    <Form.Field error={errors[0] != null}>
      <label>{label}</label>
      <input
        type="text"
        value={state.todo[field]}
        onChange={evt => actions.editingTodo({ field, value: evt.target.value })}
      />
      {errors[0] && (
        <Label color="red" pointing>
          {errors[0]}
        </Label>
      )}
    </Form.Field>
  )
}

export class TodoForm extends Component {
  render() {
    const { state, actions } = this.props
    const todo = state.todo

    return (
      <div>
        {this.props.label && <h4>{this.props.label}</h4>}
        <Form>
          <InputDiv state={state} actions={actions} field="priority" label="Priority:" />
          <InputDiv state={state} actions={actions} field="description" label="Description:" />
          <div>
            <Button primary size="small" onClick={preventDefault(() => actions.saveTodo(todo))}>
              Save
            </Button>
            <Button size="small" onClick={preventDefault(() => actions.cancelEdit(todo))}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}
