import { compose } from "ramda";
import { actions } from "./actions";
import { model } from "./model";
import { view } from "./view-react";

export const todoForm = {
  model,
  create: compose(view, actions),
  events: {
    emit: [
      "saveTodo"
    ],
    listen: [
      "editTodo",
      "saveTodoSuccess"
    ]
  }
};
