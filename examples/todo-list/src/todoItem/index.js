import { createView } from "./view.jsx";

export const todoItem = {
  create: parentActions => _update => createView(parentActions)
};
