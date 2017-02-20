import { actions } from "./actions";
import { mergeIntoOne } from "../util";
import { todoStorage } from "../app/store";

const newTodo = actions.newTodo.map(title => model => {
  model.newTodo = title;
  return model;
});

const saveNewTodo = actions.saveNewTodo.map(title => model => {
  title = title.trim();

  if (title) {
    model.todos = todoStorage.saveTodo({title: title});
    model.newTodo = "";
  }
  return model;
});

export const modelChanges = mergeIntoOne([
  newTodo,
  saveNewTodo
]);
