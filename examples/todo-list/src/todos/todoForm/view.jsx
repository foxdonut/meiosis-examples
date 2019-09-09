import React, { Component } from "react"
import preventDefault from "prevent-default"
import * as R from "ramda"
import { Button, Form, Label } from "semantic-ui-react"

const InputDiv = ({ state, id, actions, field, label }) => {
  const errors = R.path([id, "validationErrors", field], state) || []

  return (
    <Form.Field error={errors[0] != null}>
      <label>{label}</label>
      <input
        type="text"
        value={state[id].todo[field]}
        onChange={evt => actions.editingTodo(id, field, evt.target.value)}
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
    const { state, id, actions } = this.props
    const todo = state[id].todo

    return (
      <div>
        {this.props.label && <h4>{this.props.label}</h4>}
        <Form>
          <InputDiv state={state} id={id} actions={actions} field="priority" label="Priority:" />
          <InputDiv
            state={state}
            id={id}
            actions={actions}
            field="description"
            label="Description:"
          />
          <div>
            <Button primary size="small" onClick={preventDefault(() => actions.saveTodo(id, todo))}>
              Save
            </Button>
            <Button size="small" onClick={preventDefault(() => actions.cancelEditTodo(id, todo))}>
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}
