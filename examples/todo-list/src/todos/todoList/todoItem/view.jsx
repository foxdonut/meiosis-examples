// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

export const view = ({ actions }) => model => (
  <tr key={model.id}>
    <td>{model.priority}</td>
    <td>{model.description}</td>
    <td>
      <button className="ui primary basic tiny button"
        onClick={() => actions.editTodo(model)}>Edit</button>

      <button className="ui negative basic tiny button"
        onClick={() => actions.deleteTodo(model)}>Delete</button>
    </td>
  </tr>
);
