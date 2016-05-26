import React from "react";

const view = (model, actions) => {
  const onLoad = _evt => actions.requestLoadList();

  const onEdit = todo => evt => {
    evt.preventDefault();
    actions.editTodo(todo);
  };

  const onDelete = todo => evt => {
    evt.preventDefault();
    actions.requestDeleteTodo(todo.id);
  };

  const renderTodo = (todo) => (
    <tr key={todo.id}>
      <td>{todo.priority}</td>
      <td>{todo.description}</td>
      <td>
        <button className="btn btn-primary btn-xs" onClick={onEdit(todo)}>Edit</button>
        <span> </span>
        <button className="btn btn-danger btn-xs" onClick={onDelete(todo)}>Delete</button>
      </td>
    </tr>
  );

  return (
    <div className="row">
      <div className="col-md-8">
        <div><button className="btn btn-primary btn-sm" onClick={onLoad}>Load Todos</button></div>
        <div>Todo List: {model.message}</div>
        <table className="table ng-table">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {model.todos.map(renderTodo)}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default view;
