import { append, assoc, complement, filter, findIndex, lensIndex, merge, propEq, set } from "ramda";
import { actions } from "./actions";

export const model = () => ({
  todos: [],
  message: "Initializing..."
});

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

/*
const deleteTodoStart = actions.deleteTodoStart.map(() => model =>
  assoc("message", "Deleting, please wait...", model));

const deleteTodoSuccess = actions.deleteTodoSuccess.map(todoId => model =>
  ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }));

const deleteTodoFailure = actions.deleteTodoFailure.map(() => model =>
  ({ todos: model.todos, message: "An error occured when deleting a Todo." }));

const saveTodoStart = todoForm.actions.saveTodoStart.map(() => model =>
  assoc("message", "Saving, please wait...", model));

const saveTodoSuccess = todoForm.actions.saveTodoSuccess.map(todo => model =>
  merge(model, {todos: updateTodos(model.todos, todo), message: "" }));

const saveTodoFailure = todoForm.actions.saveTodoFailure.map(() => model =>
  ({ todos: model.todos, message: "An error occured when saving a Todo." }));
*/
