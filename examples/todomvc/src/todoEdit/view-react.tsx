import * as React from "react";

import { Todo } from "../util";
import { actions } from "./actions";

export const view = (todo: Todo, update: Function) => (
  <input type="text" className="edit" value={todo.title}
    onKeyUp={actions.editKeyUp(update, todo.id)}
    onChange={actions.editChange(update, todo.id)}
    onBlur={actions.editBlur(update, todo.id)}
    autoFocus
  />
);
