import Inferno from "inferno";

export const createView = components =>
  model => (
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
            {model.todos.map(components.todoItem)}
          </tbody>
        </table>
      </div>
    </div>
  );
