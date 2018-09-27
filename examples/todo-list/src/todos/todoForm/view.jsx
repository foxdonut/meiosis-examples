// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";
import preventDefault from "prevent-default";
import classNames from "classnames";

export const view = actions => (model, id) => {
  const inputField = (name, value) =>
    <input type="text" className="form-control" value={value}
      onInput={evt => actions.editingTodo(id, name, evt.target.value)}/>;

  const errorMessage = errors => errors ?
    <div className="ui red label pointing">{errors[0]}</div> : null;

  const inputDiv = (field, label) =>
    <div className={
      classNames("field", { "error": (model[id].validationErrors[field] && model[id].validationErrors[field].length > 0) })
    }>
      <label htmlFor={field}>{label}</label>
      {inputField(field, model[id].todo[field])}
      {errorMessage(model[id].validationErrors[field])}
    </div>;

  return (
    <form className="ui form">
      {inputDiv("priority", "Priority:")}
      {inputDiv("description", "Description:")}
      <div>
        <button className="ui primary basic small button"
          onClick={preventDefault(() => actions.onSaveTodo(id, model[id].todo))}>Save</button>

        <button className="ui basic small button"
          onClick={preventDefault(() => actions.onCancelEdit(id, model[id].todo))}>Cancel</button>
      </div>
    </form>
  );
};
