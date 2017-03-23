import Inferno from "inferno";
import { actions } from "./actions";

export const view = (update, events) => todo => (
  <tr key={todo.id}>
    <td>{todo.priority}</td>
    <td>{todo.description}</td>
    <td>
      <button className="ui primary basic tiny button" onClick={actions.editTodo(update, todo)}>Edit</button>
      <button className="ui negative basic tiny button" onClick={actions.deleteTodo(update, todo)}>Delete</button>
    </td>
  </tr>
);
