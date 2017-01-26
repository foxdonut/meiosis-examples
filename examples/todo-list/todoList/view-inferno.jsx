import Inferno from "inferno";
import { todoItemView } from "../todoItem/view-inferno.jsx";

export const todoListView = (model, actions) => {
  const renderTodo = todoItemView(actions);

  return (
    <div className="row">
      <div className="col-md-8">
        <div>Todo List: {model.message}</div>
        <table className="table table-bordered table-striped table-hover">
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
