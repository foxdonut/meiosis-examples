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

  return (
    <form>
      <input type="hidden" name="id" value={model.todo.id}/>
      <div className="form-group">
        <label htmlFor="priority">Priority:</label>
        {inputField("priority", model.todo.priority)}
        {errorMessage(model.validationErrors.priority)}
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        {inputField("description", model.todo.description)}
        {errorMessage(model.validationErrors.description)}
      </div>
      <div>
        <button className="btn btn-primary btn-xs" onClick={onSave}>Save</button>
        <button className="btn btn-danger btn-xs" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default view;
