import { assoc, complement, filter, propEq } from "ramda";

export const actions = ({ update, events, services }) => {
  const editTodo = todo => () => events.editTodo(todo);

  const deleteTodoSuccess = (update, todoId) => () => update(model =>
    ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }));

  const deleteTodoFailure = update => () => update(model =>
    ({ todos: model.todos, message: "An error occured when deleting a Todo." }));

  const deleteTodo = todo => () => {
    update(model => assoc("message", "Deleting, please wait...", model));

    services.deleteTodo(todo.id).
      then(deleteTodoSuccess(update, todo.id)).
      catch(deleteTodoFailure(update));
  };

  return {
    editTodo,
    deleteTodo
  };
};
