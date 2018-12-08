import React, { Component } from "react"
import preventDefault from "prevent-default"
import * as R from "ramda"
import { Button, Form, Label } from "semantic-ui-react"

import { model } from "./model"
import { patches } from "./patches"
import { actions } from "./actions"

export const todoForm = {
  model,
  patches,
  actions
}

const inputDiv = (id, field, label, model, actions) => {
  const errors = R.path([id, "validationErrors", field], model)

  return (
    <Form.Field error={R.path([id, "validationErrors", field, 0], model) != null}>
      <label>{label}</label>
      <input type="text" value={R.path([id, "todo", field], model)}
        onChange={evt => actions.editingTodo(id, field, evt.target.value)}/>
      {errors && <Label color="red" pointing>{errors[0]}</Label>}
    </Form.Field>
  )
}

export class TodoForm extends Component {
  render() {
    const { model, id, actions } = this.props
    const todo = model[id].todo

    return (<div>
      {model[id].label && <h4>{model[id].label}</h4>}
      <Form>
        {inputDiv(id, "priority", "Priority:", model, actions)}
        {inputDiv(id, "description", "Description:", model, actions)}
        <div>
          <Button primary size="small"
            onClick={preventDefault(() => actions.onSaveTodo(id, todo, model))}>
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
