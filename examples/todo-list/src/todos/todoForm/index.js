import React, { Component } from "react"
import preventDefault from "prevent-default"
import { Button, Form, Label } from "semantic-ui-react"

import { initialState } from "./initialState"
import { actions } from "../actions"

export const todoForm = {
  initialState,
  actions
}

const inputDiv = ({ local, field, label }) => {
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
    const { root, local } = this.props
    const todo = local.state.todo

    return (
      <div>
        {local.state.label && <h4>{local.state.label}</h4>}
        <Form>
          {inputDiv({ local, field: "priority", label: "Priority:" })}
          {inputDiv({ local, field: "description", label: "Description:" })}
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
              onClick={preventDefault(() => local.update(actions.cancelEditTodo()))}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}
