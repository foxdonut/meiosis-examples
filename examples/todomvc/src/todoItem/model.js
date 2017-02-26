import { actions } from "./actions";
import { mergeIntoOne } from "../util";

const setCompleted = actions.setCompleted.map(({ todoId, completed }) => model => {
  model.todosById[todoId].completed = completed;
  return model;
});

const editTodo = actions.editTodo.map(todo => model => {
  model.editTodo = todo;
  return model;
});

const deleteTodo = actions.deleteTodo.map(todoId => model => {
  delete model.todosById[todoId];
  model.todoIds.splice(model.todoIds.indexOf(todoId), 1);
  return model;
});

export const modelChanges = mergeIntoOne([
  setCompleted,
  editTodo,
  deleteTodo
]);
