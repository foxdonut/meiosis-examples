import Inferno from "inferno";
import { intents } from "./actions";

export const todoFormView = model => {
  const inputField = (name, value) =>
    <input type="text" id={name} name={name} className="form-control" value={value}
      onInput={intents.editingTodo(name)}/>;

  const errorMessage = error => error ?
    <span className="has-error"><span className="help-block">{error}</span></span> : null;

  const inputDiv = (field, label) =>
    <div className="form-group">
      <label htmlFor={field}>{label}</label>
      {inputField(field, model.todo[field])}
      {errorMessage(model.validationErrors[field])}
    </div>;

  return (
    <form>
      <input type="hidden" name="id" value={model.todo.id}/>
      {inputDiv("priority", "Priority:")}
      {inputDiv("description", "Description:")}
      <div>
        <button className="btn btn-primary btn-xs" onClick={intents.saveTodo(model.todo)}>Save</button>
        <button className="btn btn-danger btn-xs" onClick={intents.clearForm}>Cancel</button>
      </div>
    </form>
  );
};
