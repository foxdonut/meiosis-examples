import { UpdateFunction, ViewFunction } from "meiosis";
import { createActions } from "./actions";
import { createRoutes } from "./routes";
import { createView } from "./view";

export const footer = {
  create: (update: UpdateFunction, events: any): ViewFunction => {
    createRoutes(events);
    const actions = createActions(events);
    return createView(actions);
  },
  events: {
    emit: ["clearCompleted", "filter", "loadAll", "routeChange"]
  }
};
