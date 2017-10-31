import Inferno from "inferno";

import { wrap } from "../util/handler";

export const createView = actions => todo => (
  <tr key={todo.id}>
    <td>{todo.priority}</td>
    <td>{todo.description}</td>
    <td>
      <button className="ui primary basic tiny button" onClick={wrap(actions.editTodo, todo)}>Edit</button>
      <button className="ui negative basic tiny button" onClick={wrap(actions.deleteTodo, todo)}>Delete</button>
    </td>
  </tr>
);
