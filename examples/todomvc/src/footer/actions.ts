// NOTE: this is not used in the Mithril version.

import { Promise } from "es6-promise";
import { todoStorage } from "../app/todo-storage";
import { triggerRouteChange } from "../router";

export const actions = {
  clearCompleted: (update: Function, events: any) => () => todoStorage.clearCompleted().then(events.todosToDisplay),
  filterBy: (update: Function, filterBy: string) => () => triggerRouteChange(update, "/" + filterBy)
};
