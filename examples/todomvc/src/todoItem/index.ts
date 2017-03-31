import { UpdateFunction, ViewFunction } from "meiosis";
import { todoEdit } from "../todoEdit";
import { createActions } from "./actions";
import { createListeners } from "./listeners";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const todoItem = {
  create: (update: UpdateFunction, events: any): ViewFunction => {
    const updates = createUpdates(update);
    createListeners(updates, events);
    const actions = createActions(updates, events);

    const components = {
      todoEdit: todoEdit.create(update, events.todoEdit)
    };
    return createView(actions, components);
  },
  events: {
    emit: ["deleteTodoId", "setCompleted"],
    listen: ["onDeleteTodoId", "onSetCompleted"],
    todoEdit: todoEdit.events
  }
};
