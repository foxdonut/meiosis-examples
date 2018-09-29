// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

import { get } from "../../../util";

export const view = ({ actions, todoForm }) => (model, id, { todo }) => ([
  <tr key={todo.id}>
    <td>{todo.priority}</td>
    <td>{todo.description}</td>
    <td>
      <button className="ui primary basic tiny button"
        onClick={() => actions.onEditTodo(id, todo)}>Edit</button>

      <button className="ui negative basic tiny button"
        onClick={() => actions.deleteTodo(todo)}>Delete</button>
    </td>
  </tr>
  , get(model, id, "editing") &&
  <tr key={`${todo.id}_editing`}>
    <td colSpan={3}>
      {todoForm(model, `todoForm:${todo.id}`)}
    </td>
  </tr>
]);
