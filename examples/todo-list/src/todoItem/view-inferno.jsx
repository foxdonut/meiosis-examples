import Inferno from "inferno";

export const view = actions => todo => (
  <tr key={todo.id}>
    <td>{todo.priority}</td>
    <td>{todo.description}</td>
    <td>
      <button className="ui primary basic tiny button" onClick={actions.editTodo(todo)}>Edit</button>
      <button className="ui negative basic tiny button" onClick={actions.deleteTodo(todo)}>Delete</button>
    </td>
  </tr>
);
