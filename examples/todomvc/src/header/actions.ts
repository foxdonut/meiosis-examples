import { ChangeEvent, EventHandler, KeyboardEvent } from "react";
import { Model, Todo } from "../util";
import { todoStorage } from "../app/todo-storage";

const ENTER_KEY = 13;

export const createActions = (updates: any, events: any) => {
  const saveNewTodo = (rawTitle: string) => {
    const title: string = rawTitle.trim();

    if (title) {
      todoStorage.saveTodo({title: title}).then(updates.updateSavedTodo);
    }
  };

  const newTodoKeyUp: EventHandler<KeyboardEvent<HTMLInputElement>> = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === ENTER_KEY) {
      saveNewTodo(evt.currentTarget.value);
    }
    else {
      updates.updateNewTodo(evt.currentTarget.value);
    }
  };

  const newTodoKeyUpEnterOnly: EventHandler<KeyboardEvent<HTMLInputElement>> = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      saveNewTodo(evt.currentTarget.value);
    }
  };

  const newTodoChange: EventHandler<ChangeEvent<HTMLInputElement>> = (evt: ChangeEvent<HTMLInputElement>) =>
    updates.updateNewTodo(evt.currentTarget.value);

  return {
    newTodoKeyUp,
    newTodoKeyUpEnterOnly,
    newTodoChange
  };
};
