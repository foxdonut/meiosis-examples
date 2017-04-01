import { UpdateFunction } from "meiosis";
import { createListeners } from "./listeners";

export const storage = {
  create: (update: UpdateFunction, events: any): void => {
    createListeners(events);
  },
  events: {
    emit: ["deleteTodoId", "displayTodos", "saveTodo", "saveNewTodo", "setCompleted"],
    listen: ["onDeleteTodoId", "onFilter", "onLoadAll", "onSaveNewTodo", "onSaveTodo", "onSetCompleted"]
  }
};
