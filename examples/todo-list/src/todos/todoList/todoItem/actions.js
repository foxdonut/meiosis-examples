import { assocPath } from "ramda";

export const actions = (update, actions) => ({
  onEditTodo: (id, todo) => {
    //FIXME: the order of these operation matters.
    //Ultimately, would like to combine these two updates into one.
    actions.editTodo(todo);
    update(assocPath([id, todo.id, "editing"], true))
  }
});
