import { UpdateFunction, ViewFunction } from "meiosis";
import { todoItem } from "../todoItem";
import { createActions } from "./actions";
import { createListeners } from "./listeners";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const main = {
  create: (update: UpdateFunction, events: any): ViewFunction => {
    const updates = createUpdates(update);
    createListeners(updates, events);
    const actions = createActions(updates, events);

    const components = {
      todoItem: todoItem.create(update, events.todoItem)
    };
    return createView(actions, components);
  },
  events: {
    emit: ["toggleAllTodos"],
    listen: ["onDisplayTodos", "onUpdateTodo"],
    todoItem: todoItem.events
  }
};
