import Inferno from "inferno";
import { todoItemView } from "../todoItem/view-inferno.jsx";

export const todoListView = model => {
  return (
    <div className="row">
      <div className="col-md-8">
        <div>Todo List: {model.message}</div>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {model.todos.map(todoItemView)}
          </tbody>
        </table>
      </div>
    </div>
  );
};
