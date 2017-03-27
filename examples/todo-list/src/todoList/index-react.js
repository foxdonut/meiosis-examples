import { model } from "./model";
import { view } from "./view-react";
import { listeners } from "./listeners";

export const todoList = {
  model,
  createView: (update, events) => {
    listeners(update, events);

    return view(update, events);
  },
  events: {
    emit: [
      "editTodo"
    ],
    listen: [
      "error",
      "pleaseWait",
      "todoList",
      "updateTodo"
    ]
  }
};
