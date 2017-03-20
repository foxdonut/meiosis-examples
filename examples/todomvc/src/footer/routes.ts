import * as crossroads from "crossroads";
import { todoStorage } from "../app/todo-storage";
import { actions } from "../main/actions";

export const addRoutes = () => {
  crossroads.addRoute("/", () =>
    todoStorage.loadAll().then(actions.displayTodos), 1);

  crossroads.addRoute("/active", () =>
    todoStorage.filter("active").then(actions.displayTodos), 1);

  crossroads.addRoute("/completed", () =>
    todoStorage.filter("completed").then(actions.displayTodos), 1);
};
