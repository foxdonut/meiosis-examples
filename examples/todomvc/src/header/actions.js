import * as _ from "lodash";
import { Model, Todo, todoStorage } from "../util";

const ENTER_KEY = 13;

export const createUpdates = (update: UpdateFunction) => ({
  editingNewTodo: (title: string) =>
    update((model: Model) => _.set(model, "newTodo", title)),

  saveNewTodo: (todo: Todo) =>
    update((model: Model) => {
      model.todosById[todo.id] = todo;
      model.todoIds.push(todo.id);
      model.newTodo = "";
      return model;
    })
});

export const createActions = (updates: any) => {
  const saveNewTodo = (rawTitle: string) => {
    const title: string = rawTitle.trim();

    if (title) {
      todoStorage.saveTodo({ title }).then(updates.saveNewTodo);
    }
  };

  const newTodoKeyUp: any = (evt: any) => {
    if (evt.keyCode === ENTER_KEY) {
      saveNewTodo(evt.currentTarget.value);
    }
    else {
      updates.editingNewTodo(evt.currentTarget.value);
    }
  };

  const newTodoKeyUpEnterOnly: any = (evt: any) => {
    if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      saveNewTodo(evt.currentTarget.value);
    }
  };

  const newTodoChange: any = (evt: any) =>
    updates.editingNewTodo(evt.currentTarget.value);

  return {
    newTodoKeyUp,
    newTodoKeyUpEnterOnly,
    newTodoChange
  };
};
