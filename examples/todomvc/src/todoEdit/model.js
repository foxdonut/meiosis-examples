import { actions } from "./actions";
import { mergeIntoOne } from "../util";
import { todoStorage } from "../app/store";

const clearEdit = actions.clearEdit.map(() => model => {
  model.editTodo = { };
  return model;
});

const editingTodo = actions.editingTodo.map(todo => model => {
  model.editTodo = todo;
  return model;
});

const saveTodo = actions.saveTodo.map(todo => model => {
  const editing = todo.id && (todo.id === model.editTodo.id);
  todo.title = todo.title.trim();

  if (editing && todo.title) {
    model.todos = todoStorage.saveTodo(todo);
    model.editTodo = { };
  }
  return model;
});

export const modelChanges = mergeIntoOne([
  clearEdit,
  editingTodo,
  saveTodo
]);
