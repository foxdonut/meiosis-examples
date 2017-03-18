import { actions } from "./actions";
import { mergeIntoOne } from "../util";

const clearEdit = actions.clearEdit.map(() => model => {
  model.editTodo = { };
  return model;
});

const editingTodo = actions.editingTodo.map(todo => model => {
  model.editTodo = todo;
  return model;
});

const saveTodo = actions.saveTodo.map(todo => model => {
  model.todosById[todo.id] = todo;
  model.editTodo = { };
  return model;
});

export const modelChanges = mergeIntoOne([
  clearEdit,
  editingTodo,
  saveTodo
]);
