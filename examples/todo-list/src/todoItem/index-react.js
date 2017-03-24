import services from "../app/services";
import { createActions } from "./actions";
import { view } from "./view-react";

export const todoItem = {
  view: view(createActions(services))
};
