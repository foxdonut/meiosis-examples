import { compose } from "ramda";
import { createActions } from "./actions";
import { model } from "./model";
import { createView } from "./view.jsx";

export const todoForm = {
  model,
  create: compose(createView, createActions),
  events: {
    emit: [
      "saveTodo"
    ],
    listen: [
      "onEditTodo",
      "onSaveTodoSuccess"
    ]
  }
};
