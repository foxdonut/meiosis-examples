import { actions } from "./actions";
import { mergeIntoOne } from "../util";
import { todoStorage } from "../app/store";

const setCompleted = actions.setCompleted.map(({ todoId, completed }) => model => {
  model.todos = todoStorage.setCompleted(todoId, completed);
  return model;
});

const editTodo = actions.editTodo.map(todo => model => {
  model.editTodo = todo;
  return model;
});

const deleteTodo = actions.deleteTodo.map(todoId => model => {
  model.todos = todoStorage.deleteTodoId(todoId);
  return model;
});

export const modelChanges = mergeIntoOne([
  setCompleted,
  editTodo,
  deleteTodo
]);
