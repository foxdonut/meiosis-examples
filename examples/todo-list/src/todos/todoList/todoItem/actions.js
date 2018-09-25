import { assocPath } from "ramda";

export const actions = (update, actions) => ({
  onEditTodo: todo => {
    update(assocPath(["editing", todo.id], true))
    actions.editTodo(todo);
  }
});
