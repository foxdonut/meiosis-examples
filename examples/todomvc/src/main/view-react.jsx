import React from "react";

import { intents } from "./actions";
import { todoItemView } from "../todoItem/view-react.jsx";

export const mainView = model => (
  <section className="main">
    <input className="toggle-all" type="checkbox" checked={model.allCompleted}
      onChange={intents.toggleAllTodos}/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {model.filteredTodos.map(todoItemView(model))}
    </ul>
  </section>
);
