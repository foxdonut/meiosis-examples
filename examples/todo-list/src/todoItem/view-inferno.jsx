import Inferno from "inferno";
import { intents } from "./actions";

export const todoItemView = todo => (
  <tr key={todo.id}>
    <td>{todo.priority}</td>
    <td>{todo.description}</td>
    <td>
      <button className="btn btn-primary btn-xs" onClick={intents.editTodo(todo)}>Edit</button>
      <button className="btn btn-danger btn-xs" onClick={intents.deleteTodo(todo)}>Delete</button>
    </td>
  </tr>
);
