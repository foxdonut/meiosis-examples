// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

export const view = ({ todoItem }) => model => (
  <table className="ui celled striped table">
    <thead>
      <tr>
        <th>Priority</th>
        <th>Description</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {model.todoIds.map(todoId =>
        todoItem(model, `todoItem:${todoId}`, { todo: model.todos[todoId] }))}
    </tbody>
  </table>
);
