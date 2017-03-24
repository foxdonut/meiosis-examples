import services from "../app/services";
import { actions } from "./actions";
import { view } from "./view-inferno.jsx";

export const todoItem = {
  view: view(actions(services))
};
