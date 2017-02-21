import React from "react";

import { intents } from "./actions";

export const todoEditView = todo => (
  <input type="text" className="edit" value={todo.title}
    onKeyUp={intents.editKeyUp(todo.id)}
    onChange={intents.editChange(todo.id)}
    onBlur={intents.editBlur(todo.id)}
    autoFocus
  />
);
