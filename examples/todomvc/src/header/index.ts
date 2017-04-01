import { UpdateFunction, ViewFunction } from "meiosis";
import { createActions } from "./actions";
import { createListeners } from "./listeners";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const header = {
  create: (update: UpdateFunction, events: any): ViewFunction => {
    const updates = createUpdates(update);
    createListeners(updates, events);
    const actions = createActions(updates, events);
    return createView(actions);
  },
  events: {
    emit: ["saveNewTodo"],
    listen: ["onSaveNewTodo"]
  }
};
