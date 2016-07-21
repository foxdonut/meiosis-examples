import React from "react";
import serialize from "form-serialize";

const view = (todo, actions) => {
  const getTodo = evt => serialize(evt.target.form, { hash: true, empty: true });

  const onChangeText = evt => actions.editTodo(getTodo(evt));

  const onSave = evt => {
    evt.preventDefault();
    actions.saveTodo(getTodo(evt));
  };

  const onCancel = function(evt) {
    evt.preventDefault();
    actions.clearForm();
  };

  return (
    <div className="row">
      <div className="col-md-4">
        <form>
          <input type="hidden" name="id" value={todo.id}/>
          <div className="form-group">
            <label htmlFor="priority">Priority:</label>
            <input type="text" id="priority" name="priority" className="form-control" value={todo.priority} onChange={onChangeText}/>
          </div>
          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input type="text" id="description" name="description" className="form-control" value={todo.description} onChange={onChangeText}/>
          </div>
          <div>
            <button className="btn btn-primary btn-xs" onClick={onSave}>Save</button>
            <span> </span>
            <button className="btn btn-danger btn-xs" onClick={onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default view;
