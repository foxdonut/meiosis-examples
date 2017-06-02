import { Promise } from "es6-promise";
import { ChangeEvent } from "react";

import { todoStorage } from "../util";

export const createActions = (updates: any) => ({
  toggleAllTodos: (evt: ChangeEvent<HTMLInputElement>) =>
    todoStorage.setAllCompleted(evt.target.checked).then(updates.displayTodos)
});
