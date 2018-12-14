import React, { Component } from "react"
import preventDefault from "prevent-default"
import * as R from "ramda"
import { Button, Form, Label } from "semantic-ui-react"

import { initialState } from "./initialState"
import { patches } from "./patches"
import { actions } from "./actions"

export const todoForm = {
  initialState,
  patches,
  actions
}

const inputDiv = (id, field, label, state, actions) => {
  const errors = R.path([id, "validationErrors", field], state)

  return (
    <Form.Field error={R.path([id, "validationErrors", field, 0], state) != null}>
      <label>{label}</label>
      <input type="text" value={R.path([id, "todo", field], state)}
        onChange={evt => actions.editingTodo(id, field, evt.target.value)}/>
      {errors && <Label color="red" pointing>{errors[0]}</Label>}
    </Form.Field>
  )
}

export class TodoForm extends Component {
  render() {
    const { state, id, actions } = this.props
    const todo = state[id].todo

    return (<div>
      {state[id].label && <h4>{state[id].label}</h4>}
      <Form>
        {inputDiv(id, "priority", "Priority:", state, actions)}
        {inputDiv(id, "description", "Description:", state, actions)}
        <div>
          <Button primary size="small"
            onClick={preventDefault(() => actions.saveTodo(id, todo, state))}>
            Save
          </Button>
          <Button size="small"
            onClick={preventDefault(() => actions.cancelEditTodo(id, todo))}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>)
  }
}
