import { Model, Todo } from "../util";
import { actions } from "./actions";

const setCompleted = actions.setCompleted.map(({ todoId, completed }) => (model: Model) => {
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
