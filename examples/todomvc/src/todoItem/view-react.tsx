import * as React from "react";

import { State } from "../util";
import { getTodoClasses } from "./display";
import { intents } from "./actions";
import { state } from "./state";
import { view as todoEditView } from "../todoEdit/view-react.tsx";

export const view = (model: State) => (todoId: string) => {
  const todo = model.todosById[todoId];
  const editing = state.editing(model, todo);

  return (
    <li key={todo.id} className={getTodoClasses(model, todo)}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={todo.completed}
          onChange={intents.toggleTodo(todo.id)}/>
        <label onDoubleClick={intents.editTodo(todo)}>{todo.title}</label>
        <button className="destroy" onClick={intents.deleteTodo(todo.id)}></button>
      </div>
      {editing ? todoEditView(model.editTodo) : null}
    </li>
  );
};
