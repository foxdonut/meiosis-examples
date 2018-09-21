// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";
import preventDefault from "prevent-default";

export const createView = id => actions => model => {
  const inputField = (name, value) =>
    <input type="text" id={name} name={name} className="form-control" value={value}
      onInput={evt => actions.editingTodo(name, evt.target.value)}/>;

  const errorMessage = errors => errors ?
    <div className="ui red label pointing">{errors[0]}</div> : null;

  const inputDiv = (field, label) =>
    <div className={'field' + (model[id].validationErrors[field] && model[id].validationErrors[field].length > 0 ? ' error' : '')}>
      <label htmlFor={field}>{label}</label>
      {inputField(field, model[id].todo[field])}
      {errorMessage(model[id].validationErrors[field])}
    </div>;

  return (
    <form className="ui form">
      <input type="hidden" name="id" value={model[id].todo.id}/>
      {inputDiv("priority", "Priority:")}
      {inputDiv("description", "Description:")}
      <div>
        <button className="ui primary basic small button"
          onClick={preventDefault(() => actions.saveTodo(model[id].todo))}>Save</button>

        <button className="ui basic small button"
          onClick={preventDefault(() => actions.clearForm())}>Cancel</button>
      </div>
    </form>
  );
};
