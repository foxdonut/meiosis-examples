import { Promise } from "es6-promise";

import { todoStorage } from "../util";

export const createActions = (updates: any) => ({
  toggleAllTodos: (evt: any) =>
    todoStorage.setAllCompleted(evt.target.checked).then(updates.displayTodos)
});
