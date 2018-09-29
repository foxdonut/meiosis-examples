// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";
import preventDefault from "prevent-default";
import classNames from "classnames";

import { get } from "../../util";

export const view = ({ actions }) => (model, id) => {
  const todo = model[id].todo;

  const inputField = (name, value) =>
    <input type="text" className="form-control" value={value}
      onInput={evt => actions.editingTodo(id, name, evt.target.value)}/>;

  const errorMessage = errors => errors ?
    <div className="ui red label pointing">{errors[0]}</div> : null;

  const inputDiv = (field, label) =>
    <div className={
      classNames("field", { "error": get(model, id, ["validationErrors", field, 0]) })
    }>
      <label htmlFor={field}>{label}</label>
      {inputField(field, get(model, id, ["todo", field]))}
      {errorMessage(get(model, id, ["validationErrors", field]))}
    </div>;

  return (<div>
    {model.label && <div>{model.label}</div>}
    <form className="ui form">
      {inputDiv("priority", "Priority:")}
      {inputDiv("description", "Description:")}
      <div>
        <button className="ui primary basic small button"
          onClick={preventDefault(() => actions.onSaveTodo(id, todo))}>Save</button>

        <button className="ui basic small button"
          onClick={preventDefault(() => actions.cancelEditTodo(id, todo))}>Cancel</button>
      </div>
    </form>
  </div>);
};
