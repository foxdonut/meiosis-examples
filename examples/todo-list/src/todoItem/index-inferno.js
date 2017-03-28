import services from "../app/services";
import { actions } from "./actions";
import { view } from "./view-inferno.jsx";

export const todoItem = {
  createView: (update, events) =>
    view(actions(update, events, services))
};
