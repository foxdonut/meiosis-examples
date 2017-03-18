import * as React from "react";

import { Todo } from "../util";
import { intents } from "./actions";

export const view = (todo: Todo) => (
  <input type="text" className="edit" value={todo.title}
    onKeyUp={intents.editKeyUp(todo.id)}
    onChange={intents.editChange(todo.id)}
    onBlur={intents.editBlur(todo.id)}
    autoFocus
  />
);
