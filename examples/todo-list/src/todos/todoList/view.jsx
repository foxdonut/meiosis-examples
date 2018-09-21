// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

export const createView = (id, { todoItem }) => actions => {
  const todoItemView = todoItem.createView(actions);

  return model => (
    <div className="row">
      <div className="col-md-8">
        <div>{model[id].message}</div>
        <table className="ui celled striped table">
          <thead>
            <tr>
              <th>Priority</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {model[id].todos.map(todoItemView)}
          </tbody>
        </table>
      </div>
    </div>
  );
};
