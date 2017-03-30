// NOTE: this is not used in the Mithril version.

import { Promise } from "es6-promise";
import { todoStorage } from "../app/todo-storage";
import { triggerRouteChange } from "../router";

export const createActions = (updates: any, events: any) => ({
  clearCompleted: () => todoStorage.clearCompleted().then(events.todosToDisplay)/*,
  filterBy: (filterBy: string) => () => triggerRouteChange(update, "/" + filterBy)*/
});
