import * as React from "react";

import { State } from "../util";
import { actions } from "./actions";

export const view = (model: State, update: Function) => (
  <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus value={model.newTodo}
      onKeyUp={actions.newTodoKeyUpEnterOnly(update)} onChange={actions.newTodoChange(update)}/>
  </header>
);
