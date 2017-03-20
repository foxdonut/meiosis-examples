import * as React from "react";

import { State } from "../util";
import { actions } from "./actions";
import { view as todoItemView } from "../todoItem/view-react";

export const view = (model: State, update: Function) => (
  <section className="main">
    <input className="toggle-all" type="checkbox" checked={model.allCompleted}
      onChange={actions.toggleAllTodos(update)}/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {model.todoIds.map(todoItemView(model, update))}
    </ul>
  </section>
);
