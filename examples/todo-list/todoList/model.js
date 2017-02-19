import { append, assoc, complement, filter, findIndex, lensIndex, merge, propEq, set } from "ramda";
import { actions } from "./actions";
import { todoForm } from "../todoForm";
import { mergeIntoOne } from "../util/stream-util";

export const initialModel = () => ({
  todos: [],
  message: "Initializing..."
});

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

const requestLoadList = actions.requestLoadList.map(() => model =>
  assoc("message", "Loading, please wait...", model));

const loadedList = actions.loadedList.map(todos => model => merge(model, { todos, message: "" }));

const deleteTodoStart = actions.deleteTodoStart.map(() => model =>
  assoc("message", "Deleting, please wait...", model));

const deleteTodoSuccess = actions.deleteTodoSuccess.map(todoId => model =>
  ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }));
    //.getOrElse({ todos: model.todos, message: "An error occured when deleting a Todo." }));

const saveTodoFinish = todoForm.actions.saveTodoFinish.map(maybeTodo => model =>
  merge(model, maybeTodo
    .map(todo => updateTodos(model.todos, todo))
    .map(todos => ({ todos, message: "" }))
    .getOrElse({ message: "An error occurred when saving a Todo." })));

export const modelChanges = mergeIntoOne([
  requestLoadList,
  loadedList,
  deleteTodoStart,
  deleteTodoSuccess,
  saveTodoFinish
]);
