import { UpdateFunction } from "meiosis";
import { createListeners } from "./listeners";

export const storage = {
  create: (update: UpdateFunction, events: any): void => {
    createListeners(events);
  },
  events: {
    emit: ["setCompleted", "updateTodo"],
    listen: ["onSetCompleted"]
  }
};
