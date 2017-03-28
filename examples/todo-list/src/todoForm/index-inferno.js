import services from "../app/services";
import { actions } from "./actions";
import { model } from "./model";
import { view } from "./view-inferno.jsx";

export const todoForm = {
  model,
  createView: (update, events) => {
    return view(actions(update, events, services));
  },
  events: {
    emit: [
      "saveTodoFailure",
      "saveTodoStart",
      "saveTodoSuccess",
    ],
    listen: [
      "editTodo"
    ]
  }
};
