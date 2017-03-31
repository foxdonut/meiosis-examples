import * as crossroads from "crossroads";
import { Model } from "../util";

export const createRoutes = (updates: any, events: any) => {
  crossroads.addRoute("/", () => {
    //todoStorage.loadAll().then(events.todosToDisplay);
  }, 1);

  crossroads.addRoute("/active", () => {
    //todoStorage.filter("active").then(events.todosToDisplay);
  }, 1);

  crossroads.addRoute("/completed", () => {
    //todoStorage.filter("completed").then(events.todosToDisplay);
  }, 1);
};
