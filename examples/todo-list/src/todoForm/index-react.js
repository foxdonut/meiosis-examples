import services from "../app/services";
import { actions } from "./actions";
import { model } from "./model";
import { view } from "./view-react";
import { listeners } from "./listeners";

export const todoForm = {
  model,
  createView: (update, events) => {
    listeners(update, events);
    return view(update, events, actions(services));
  }
};
