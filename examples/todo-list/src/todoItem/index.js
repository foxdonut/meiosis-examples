import { createView } from "./view.jsx";

export const createTodoItem = parentActions => _update => ({
  view: createView(parentActions)
});
