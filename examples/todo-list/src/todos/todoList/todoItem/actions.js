import { append, assocPath } from "ramda";

export const actions = (update, actions) => ({
  onEditTodo: (path, todo) => {
    //FIXME: the order of these operation matters.
    //Ultimately, would like to combine these two updates into one.
    actions.editTodo(todo);
    update(assocPath(append("editing", path), true))
  }
});
