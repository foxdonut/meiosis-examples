import { UpdateFunction, ViewFunction } from "meiosis";
import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const header = {
  create: (update: UpdateFunction): ViewFunction => {
    const updates = createUpdates(update);
    const actions = createActions(updates);
    return createView(actions);
  }
};
