import Inferno from "inferno";
import { todoItem } from "../todoItem/index-inferno";

export const view = (model, update, events) => {
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
            {model.todos.map(todoItem.view(update, events))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
