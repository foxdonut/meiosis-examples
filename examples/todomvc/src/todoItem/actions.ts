const flyd = require("flyd");
import { ChangeEvent, EventHandler } from "react";
import { Promise } from "es6-promise";
import { Model, Todo } from "../util";
import { todoStorage } from "../app/todo-storage";

const setCompleted =  (update: Function, todoId: string, completed: boolean ) => update((model: Model) => {
  model.todosById[todoId].completed = completed;
  return model;
});

const editTodo = (update: Function, todo: Todo) => () => update((model: Model) => {
  model.editTodo = todo;
  return model;
});

const deleteTodo = (update: Function, todoId: string) => () => todoStorage.deleteTodoId(todoId).then(
  () => update((model: Model) => {
    delete model.todosById[todoId];
    model.todoIds.splice(model.todoIds.indexOf(todoId), 1);
    return model;
  })
);

const toggleTodo: (update: Function, todoId: string) => EventHandler<ChangeEvent<HTMLInputElement>> =
  (update: Function, todoId: string) => (evt: ChangeEvent<HTMLInputElement>) =>
    (checked =>
      todoStorage.setCompleted(todoId, checked).then(
        () => setCompleted(update, todoId, checked)))(evt.target.checked);

export const actions = {
  deleteTodo,
  editTodo,
  toggleTodo
};
