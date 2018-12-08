import React, { Component } from "react"
import preventDefault from "prevent-default"
import classNames from "classnames"
import * as R from "ramda"

import { model } from "./model"
import { patches } from "./patches"
import { actions } from "./actions"

export const todoForm = {
  model,
  patches,
  actions
}

const inputField = (id, name, value, actions) =>
  <input type="text" className="form-control" value={value}
    onChange={evt => actions.editingTodo(id, name, evt.target.value)}/>

const errorMessage = errors => errors ?
  <div className="ui red label pointing">{errors[0]}</div> : null

const inputDiv = (id, field, label, model, actions) =>
  <div className={
    classNames("field", { "error": R.path([id, "validationErrors", field, 0], model) })
  }>
    <label htmlFor={field}>{label}</label>
    {inputField(id, field, R.path([id, "todo", field], model), actions)}
    {errorMessage(R.path([id, "validationErrors", field], model))}
  </div>

export class TodoForm extends Component {
  render() {
    const { model, id, actions } = this.props
    const todo = model[id].todo

    return (<div>
      {model[id].label && <h4>{model[id].label}</h4>}
      <form className="ui form">
        {inputDiv(id, "priority", "Priority:", model, actions)}
        {inputDiv(id, "description", "Description:", model, actions)}
        <div>
          <button className="ui primary basic small button"
            onClick={preventDefault(() => actions.onSaveTodo(id, todo, model))}>Save</button>

          <button className="ui basic small button"
            onClick={preventDefault(() => actions.cancelEditTodo(id, todo))}>Cancel</button>
        </div>
      </form>
    </div>)
  }
}
