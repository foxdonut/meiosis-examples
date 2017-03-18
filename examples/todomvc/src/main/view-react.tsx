import * as React from "react";

import { Model } from "../util";
import { intents } from "./actions";
import { todoItemView } from "../todoItem/view-react.jsx";

export const mainView = (model: Model) => (
  <section className="main">
    <input className="toggle-all" type="checkbox" checked={model.allCompleted}
      onChange={intents.toggleAllTodos}/>
    <label htmlFor="toggle-all">Mark all as complete</label>
    <ul className="todo-list">
      {model.todoIds.map(todoItemView(model))}
    </ul>
  </section>
);
