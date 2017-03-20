import * as crossroads from "crossroads";
import { Model } from "../util";
import { todoStorage } from "../app/todo-storage";
import { actions } from "../main/actions";

const updateModelFilter = (update: Function, filter: string) => {
  update((model: Model) => {
    model.filter = filter;
    return model;
  });
};

export const addRoutes = (update: Function) => {
  crossroads.addRoute("/", () => {
    updateModelFilter(update, "all");
    todoStorage.loadAll().then(actions.displayTodos(update));
  }, 1);

  crossroads.addRoute("/active", () => {
    updateModelFilter(update, "active");
    todoStorage.filter("active").then(actions.displayTodos(update));
  }, 1);

  crossroads.addRoute("/completed", () => {
    updateModelFilter(update, "completed");
    todoStorage.filter("completed").then(actions.displayTodos(update));
  }, 1);
};
