import { Model, Todo } from "../util";
import { actions } from "./actions";

const clearEdit = actions.clearEdit.map(() => (model: Model) => {
  model.editTodo = { };
  return model;
});

const editingTodo = actions.editingTodo.map((todo: Todo) => (model: Model) => {
  model.editTodo = todo;
  return model;
});

const saveTodo = actions.saveTodo.map((todo: Todo) => (model: Model) => {
  model.todosById[todo.id] = todo;
  model.editTodo = { };
  return model;
});
