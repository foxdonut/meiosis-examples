import { actions } from "./actions";
import { mergeIntoOne } from "../util";

const newTodo = actions.newTodo.map(title => model => {
  model.newTodo = title;
  return model;
});

const saveNewTodo = actions.saveNewTodo.map(todo => model => {
  model.todosById[todo.id] = todo;
  model.todoIds.push(todo.id);
  model.newTodo = "";
  return model;
});

export const modelChanges = mergeIntoOne([
  newTodo,
  saveNewTodo
]);
