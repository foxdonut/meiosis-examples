import { Model, Todo } from "../util";
import { actions } from "./actions";

const newTodo = actions.newTodo.map((title: string) => (model: Model) => {
  model.newTodo = title;
  return model;
});

const saveNewTodo = actions.saveNewTodo.map((todo: Todo) => (model: Model) => {
  model.todosById[todo.id] = todo;
  model.todoIds.push(todo.id);
  model.newTodo = "";
  return model;
});
