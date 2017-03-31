import { compose } from "ramda";
import { actions } from "./actions";
import { model } from "./model";
import { view } from "./view-inferno.jsx";

export const todoForm = {
  model,
  create: compose(view, actions),
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
