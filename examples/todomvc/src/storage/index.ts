import { UpdateFunction } from "meiosis";
import { createListeners } from "./listeners";

export const storage = {
  create: (update: UpdateFunction, events: any): void => {
    createListeners(events);
  },
  events: {
    emit: ["displayTodos", "saveTodo", "setCompleted"],
    listen: ["onFilter", "onLoadAll", "onSaveTodo", "onSetCompleted"]
  }
};
