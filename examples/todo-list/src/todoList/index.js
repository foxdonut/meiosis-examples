import { model } from "./model";
import { createView } from "./view.jsx";
import { createListeners } from "./listeners";
import { todoItem } from "../todoItem";

export const todoList = {
  model,
  create: (update, events) => {
    createListeners(update, events);
    const components = {
      todoItem: todoItem.create(update, events)
    }
    return createView(components);
  },
  events: {
    emit: [
      "deleteTodo",
      "editTodo"
    ],
    listen: [
      "onError",
      "onPleaseWait",
      "onDeleteTodo",
      "onUpdateTodoList",
      "onUpdateTodo"
    ]
  }
};
