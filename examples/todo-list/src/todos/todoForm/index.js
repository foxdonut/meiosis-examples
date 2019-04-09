import React, { Component } from "react"
import preventDefault from "prevent-default"
import { Button, Form, Label } from "semantic-ui-react"

import { initialState } from "./initialState"

export const todoForm = {
  initialState
}

const InputDiv = ({ local, actions, field, label }) => {
  const errors = local.state.validationErrors[field] || []

  return (
    <Form.Field error={errors[0] != null}>
      <label>{label}</label>
      <input
        type="text"
        value={local.state.todo[field]}
        onChange={evt => local.update(actions.editingTodo({ field, value: evt.target.value }))}
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
    const { root, local, actions } = this.props
    const todo = local.state.todo

    return (
      <div>
        {this.props.label && <h4>{this.props.label}</h4>}
        <Form>
          <InputDiv local={local} actions={actions} field="priority" label="Priority:" />
          <InputDiv local={local} actions={actions} field="description" label="Description:" />
          <div>
            <Button
              primary
              size="small"
              onClick={preventDefault(() => actions.saveTodo({ root, local, todo }))}
            >
              Save
            </Button>
            <Button
              size="small"
              onClick={preventDefault(() => local.update(actions.clearForm(todo)))}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}
