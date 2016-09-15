import React from "react";
import serialize from "form-serialize";

const view = (model, actions) => {
  const getTodo = evt => serialize(evt.target.form, { hash: true, empty: true });

  const onChangeText = evt => actions.editTodo(getTodo(evt));

  const onSave = evt => {
    evt.preventDefault();
    actions.saveTodo(model.todo);
  };

  const onCancel = function(evt) {
    evt.preventDefault();
    actions.clearForm();
  };

  const inputField = (name, value) =>
    <input type="text" id={name} name={name} className="form-control" value={value} onChange={onChangeText}/>;

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
        <button className="btn btn-primary btn-xs" onClick={onSave}>Save</button>
        <button className="btn btn-danger btn-xs" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default view;
