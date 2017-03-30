import * as React from "react";

import { State } from "../util";

export const view = (actions: any) => (model: State) => (
  <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus value={model.newTodo}
      onKeyUp={actions.newTodoKeyUpEnterOnly} onChange={actions.newTodoChange}/>
  </header>
);
