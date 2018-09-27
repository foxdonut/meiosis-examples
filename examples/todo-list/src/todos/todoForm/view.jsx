// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";
import preventDefault from "prevent-default";
import classNames from "classnames";

import { get } from "../../util/wirem";

export const view = actions => (model, path) => {
  const todo = get(model, path, "todo");

  const inputField = (name, value) =>
    <input type="text" className="form-control" value={value}
      onInput={evt => actions.editingTodo(path, name, evt.target.value)}/>;

  const errorMessage = errors => errors ?
    <div className="ui red label pointing">{errors[0]}</div> : null;

  const inputDiv = (field, label) =>
    <div className={
      classNames("field", { "error": get(model, path, ["validationErrors", field, 0]) })
    }>
      <label htmlFor={field}>{label}</label>
      {inputField(field, get(model, path, ["todo", field]))}
      {errorMessage(get(model, path, ["validationErrors", field]))}
    </div>;

  return (
    <form className="ui form">
      {inputDiv("priority", "Priority:")}
      {inputDiv("description", "Description:")}
      <div>
        <button className="ui primary basic small button"
          onClick={preventDefault(() => actions.onSaveTodo(path, todo))}>Save</button>

        <button className="ui basic small button"
          onClick={preventDefault(() => actions.onCancelEdit(path, todo))}>Cancel</button>
      </div>
    </form>
  );
};
