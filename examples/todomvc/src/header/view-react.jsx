/*
      return (
      );
    };
  }
));
*/

import React from "react";

import { intents } from "./actions";

export const headerView = model => (
  <header className="header">
    <h1>todos</h1>
    <input className="new-todo" placeholder="What needs to be done?" autoFocus value={model.newTodo}
      onKeyUp={intents.newTodoKeyUpEnterOnly} onChange={intents.newTodoChange}/>
  </header>
);
