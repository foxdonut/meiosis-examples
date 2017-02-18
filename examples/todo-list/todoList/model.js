import flyd from "flyd";
import { append, assoc, complement, filter, findIndex, lensIndex, merge, propEq, set } from "ramda";
import { actions } from "./actions";
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

const loadedList = actions.loadedList.map(loaded => model => merge(model, loaded));

const requestDeleteTodo = actions.requestDeleteTodo.map(() => model =>
  assoc("message", "Saving, please wait...", model));

const deletedTodo = actions.deletedTodo.map(maybeTodoId => model =>
  maybeTodoId
    .map(todoId => ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }))
    .getOrElse({ todos: model.todos, message: "An error occured when deleting a Todo." }));

const savedTodo = flyd.stream().map(savedTodo => model =>
  savedTodo
    .map(todo => updateTodos(model.todos, todo))
    .map(todos => ({ todos, message: "" }))
    .getOrElse({ message: "An error occurred when saving a Todo." }))

export const modelChanges = mergeIntoOne([
  requestLoadList,
  loadedList,
  requestDeleteTodo,
  deletedTodo,
  savedTodo
]);
