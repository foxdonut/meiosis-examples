import { ChangeEvent, EventHandler, FocusEvent, KeyboardEvent } from "react";
import { Model, Todo } from "../util";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export const createActions = (updates: any, events: any) => ({
  editBlur: (id: string) => (evt: FocusEvent<HTMLInputElement>) =>
    events.saveTodo({ id, title: evt.currentTarget.value }),

  editKeyUp: (id: string) => (evt: KeyboardEvent<HTMLInputElement>) => {
    const title: string = evt.currentTarget.value;

    if (evt.keyCode === ESCAPE_KEY || evt.which === ESCAPE_KEY) {
      updates.cancelEdit();
    }
    else if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      const todo = { id, title };
      const editing = !!todo.id;
      todo.title = todo.title.trim();

      if (editing && todo.title) {
        events.saveTodo(todo);
      }
    }
    else {
      updates.editingTodo(id, title);
    }
  }
});
