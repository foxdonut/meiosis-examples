import { model } from "./model";
import { view } from "./view-react";
import { listeners } from "./listeners";

export const todoList = {
  model,
  create: (update, events) => {
    listeners(update, events);

    return view(update, events);
  },
  events: {
    emit: [
      "deleteTodo",
      "editTodo"
    ],
    listen: [
      "error",
      "pleaseWait",
      "updateTodoList",
      "updateTodo"
    ]
  }
};
