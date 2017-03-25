import services from "../app/services";
import { actions } from "./actions";
import { view } from "./view-react";

export const todoItem = {
  createView: (update, events) =>
    view({ actions: actions({ update, events, services}) })
};
