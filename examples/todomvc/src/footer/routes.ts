import * as crossroads from "crossroads";
import { Model } from "../util";

export const createRoutes = (actions: any) => {
  crossroads.addRoute("/", actions.loadAll, 1);

  crossroads.addRoute("/active", () => {
    actions.filter("active");
  }, 1);

  crossroads.addRoute("/completed", () => {
    actions.filter("completed");
  }, 1);
};
