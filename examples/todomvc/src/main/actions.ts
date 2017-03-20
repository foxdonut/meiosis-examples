import { ChangeEvent, EventHandler } from "react";
import { Promise } from "es6-promise";
import { Model, Todo } from "../util";
import { todoStorage } from "../app/todo-storage";

const displayTodos = (update: Function) => (todos: Array<Todo>) => update((model: Model) => {
  model.todoIds = [];
  model.todosById = {};

  todos.forEach(todo => {
    model.todoIds.push(todo.id);
    model.todosById[todo.id] = todo;
  });

  return model;
});

const toggleAllTodos: (update: Function) => EventHandler<ChangeEvent<HTMLInputElement>> =
  (update: Function) => (evt: ChangeEvent<HTMLInputElement>) =>
    todoStorage.setAllCompleted(evt.target.checked).then(() => actions.loadAllTodos(update));

export const actions = {
  loadAllTodos: (update: Function) => todoStorage.loadAll().then(displayTodos(update)),
  toggleAllTodos,
  displayTodos
};
