import { ChangeEvent, EventHandler, KeyboardEvent } from "react";
import { Model, Todo } from "../util";

const ENTER_KEY = 13;

export const createActions = (updates: any, events: any) => {
  const saveNewTodo = (rawTitle: string) => {
    const title: string = rawTitle.trim();

    if (title) {
      events.saveNewTodo({ title });
    }
  };

  const newTodoKeyUp: EventHandler<KeyboardEvent<HTMLInputElement>> = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === ENTER_KEY) {
      saveNewTodo(evt.currentTarget.value);
    }
    else {
      updates.editingNewTodo(evt.currentTarget.value);
    }
  };

  const newTodoKeyUpEnterOnly: EventHandler<KeyboardEvent<HTMLInputElement>> =
    (evt: KeyboardEvent<HTMLInputElement>) => {
      if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
        saveNewTodo(evt.currentTarget.value);
      }
    };

  const newTodoChange: EventHandler<ChangeEvent<HTMLInputElement>> = (evt: ChangeEvent<HTMLInputElement>) =>
    updates.editingNewTodo(evt.currentTarget.value);

  return {
    newTodoKeyUp,
    newTodoKeyUpEnterOnly,
    newTodoChange
  };
};
