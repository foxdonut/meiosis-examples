import React, { Component } from "react"
import preventDefault from "prevent-default"
import { Button, Form, Label } from "semantic-ui-react"

const InputDiv = ({ context, actions, field, label }) => {
  const errors = context.state.validationErrors[field] || []

  return (
    <Form.Field error={errors[0] != null}>
      <label>{label}</label>
      <input
        type="text"
        value={context.state.todo[field]}
        onChange={evt => actions.editingTodo(context, field, evt.target.value)}
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
    const { context, actions } = this.props
    const todo = context.state.todo

    return (
      <div>
        {this.props.label && <h4>{this.props.label}</h4>}
        <Form>
          <InputDiv context={context} actions={actions} field="priority" label="Priority:" />
          <InputDiv context={context} actions={actions} field="description" label="Description:" />
          <div>
            <Button
              primary
              size="small"
              onClick={preventDefault(() => actions.saveTodo(context, todo))}
            >
              Save
            </Button>
            <Button
              size="small"
              onClick={preventDefault(() => actions.cancelEditTodo(context, todo))}
            >
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}
