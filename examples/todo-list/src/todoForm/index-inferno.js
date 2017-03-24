import services from "../app/services";
import { actions } from "./actions";
import { model } from "./model";
import { view } from "./view-inferno.jsx";
import { listeners } from "./listeners";

export const todoForm = {
  model,
  view: view(actions(services)),
  listeners
};
