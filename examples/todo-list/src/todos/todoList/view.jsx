// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

export const view = ({ todoItem }) => model => (
  <div className="row">
    <div className="col-md-8">
      <div>{model.message}</div>
      <table className="ui celled striped table">
        <thead>
          <tr>
            <th>Priority</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {model.todoIds.map(todoId => todoItem(Object.assign({
            todo: model.todos[todoId]
          }, model.todoItem)))}
        </tbody>
      </table>
    </div>
  </div>
);
