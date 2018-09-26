// eslint-disable-next-line no-unused-vars
import Inferno from "inferno";

import { TodoForm } from "../../todoForm";

export const view = ({ actions, todoForm }) => model => ([
  <tr key={model.todo.id}>
    <td>{model.todo.priority}</td>
    <td>{model.todo.description}</td>
    <td>
      <button className="ui primary basic tiny button"
        onClick={() => actions.onEditTodo(model.todo)}>Edit</button>

      <button className="ui negative basic tiny button"
        onClick={() => actions.deleteTodo(model.todo)}>Delete</button>
    </td>
  </tr>
  , model.editing[model.todo.id] &&
  <tr key={model.todo.id + "editing"}>
    <td colSpan={3}>
      {todoForm({ FIXME: TodoForm.model({ todo: model.todo }) }, "FIXME")}
    </td>
  </tr>
]);
