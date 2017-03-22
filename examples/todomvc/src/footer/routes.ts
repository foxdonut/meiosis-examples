// NOTE: this is not used in the Mithril version.

import * as crossroads from "crossroads";
import { Model } from "../util";
import { todoStorage } from "../app/todo-storage";
import { actions } from "../main/actions";

export const addRoutes = (update: Function) => {
  crossroads.addRoute("/", () => {
    todoStorage.loadAll().then(actions.displayTodos(update));
  }, 1);

  crossroads.addRoute("/active", () => {
    todoStorage.filter("active").then(actions.displayTodos(update));
  }, 1);

  crossroads.addRoute("/completed", () => {
    todoStorage.filter("completed").then(actions.displayTodos(update));
  }, 1);
};
