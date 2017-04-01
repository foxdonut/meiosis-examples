import * as crossroads from "crossroads";
import { Model } from "../util";

export const createRoutes = (events: any) => {
  crossroads.addRoute("/", () => {
    events.loadAll(true);
  }, 1);

  crossroads.addRoute("/active", () => {
    events.filter("active");
  }, 1);

  crossroads.addRoute("/completed", () => {
    events.filter("completed");
  }, 1);
};
