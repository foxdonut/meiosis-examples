import { assocPath } from "ramda";

export const createActions = update => ({
  editTodo: todo => () => update(assocPath(["form", "todo"], todo))
});
