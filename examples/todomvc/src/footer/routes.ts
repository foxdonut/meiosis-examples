// NOTE: this is not used in the Mithril version.

import * as crossroads from "crossroads";
import { Model } from "../util";
import { todoStorage } from "../app/todo-storage";

export const addRoutes = (update: Function, events: any) => {
  crossroads.addRoute("/", () => {
    todoStorage.loadAll().then(events.todosToDisplay);
  }, 1);

  crossroads.addRoute("/active", () => {
    todoStorage.filter("active").then(events.todosToDisplay);
  }, 1);

  crossroads.addRoute("/completed", () => {
    todoStorage.filter("completed").then(events.todosToDisplay);
  }, 1);
};
