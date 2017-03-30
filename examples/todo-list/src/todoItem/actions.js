import { assoc, complement, filter, propEq } from "ramda";

export const actions = (update, events) => {
  const editTodo = todo => () => events.editTodo(todo);

  const deleteTodo = todo => () => events.deleteTodo(todo.id);

  return {
    editTodo,
    deleteTodo
  };
};
