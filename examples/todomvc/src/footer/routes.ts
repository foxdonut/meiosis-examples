import crossroads from "crossroads";
import { todoStorage } from "../app/todo-storage";
import { main } from "../main";

export const addRoutes = () => {
  crossroads.addRoute("/", () =>
    todoStorage.loadAll().then(main.actions.displayTodos), 1);

  crossroads.addRoute("/active", () =>
    todoStorage.filter("active").then(main.actions.displayTodos), 1);

  crossroads.addRoute("/completed", () =>
    todoStorage.filter("completed").then(main.actions.displayTodos), 1);
};
