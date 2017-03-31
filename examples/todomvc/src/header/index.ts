import { UpdateFunction, ViewFunction } from "meiosis";
import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const header = {
  create: (update: UpdateFunction, events: any): ViewFunction => {
    const updates = createUpdates(update);
    const actions = createActions(updates, events);
    return createView(actions);
  },
  events: {
    emit: ["saveTodo"]
  }
};
