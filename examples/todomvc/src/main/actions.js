import { Promise } from "es6-promise";

import { todoStorage } from "../util";

import { Model, Todo, UpdateFunction } from "../util";

export const createUpdates = (update: UpdateFunction) => ({
  updateTodo: (todo: Todo) => update((model: Model) => {
    model.todosById[todo.id] = todo;
    model.editTodo = { };
    return model;
  })
});

export const createActions = (updates: any) => ({
  toggleAllTodos: (evt: any) =>
    todoStorage.setAllCompleted(evt.target.checked).then(updates.displayTodos)
});
