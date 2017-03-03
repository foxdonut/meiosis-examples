import Inferno from "inferno";
import { intents } from "./actions";

export const todoItemView = todo => (
  <tr key={todo.id}>
    <td>{todo.priority}</td>
    <td>{todo.description}</td>
    <td>
      <button className="ui primary basic tiny button" onClick={intents.editTodo(todo)}>Edit</button>
      <button className="ui negative basic tiny button" onClick={intents.deleteTodo(todo)}>Delete</button>
    </td>
  </tr>
);
