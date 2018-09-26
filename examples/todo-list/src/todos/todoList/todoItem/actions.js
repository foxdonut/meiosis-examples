import { assocPath } from "ramda";

export const actions = (update, actions) => ({
  onEditTodo: todo => {
    update(assocPath(["todoItem", "editing", todo.id], true))
    actions.editTodo(todo);
  }
});
