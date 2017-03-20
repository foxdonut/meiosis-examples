import * as React from "react";

import { State } from "../util";
import { getTodoClasses } from "./display";
import { actions } from "./actions";
import { state } from "./state";
import { view as todoEditView } from "../todoEdit/view-react";

export const view = (model: State, update: Function) => (todoId: string) => {
  const todo = model.todosById[todoId];
  const editing = state.editing(model, todo);

  return (
    <li key={todo.id} className={getTodoClasses(model, todo)}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed}
          onChange={actions.toggleTodo(update, todo.id)}/>
        <label onDoubleClick={actions.editTodo(update, todo)}>{todo.title}</label>
        <button className="destroy" onClick={actions.deleteTodo(update, todo.id)}></button>
      </div>
      {editing ? todoEditView(model.editTodo, update) : null}
    </li>
  );
};
