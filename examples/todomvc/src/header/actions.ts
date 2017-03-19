import { ChangeEvent, EventHandler, KeyboardEvent } from "react";
import { Model, Todo } from "../util";
import { todoStorage } from "../app/todo-storage";

const ENTER_KEY = 13;

const updateNewTodo = (update: Function, title: string) => update(
  (model: Model) => {
    model.newTodo = title;
    return model;
  }
);

const saveNewTodo = (update: Function, rawTitle: string) => {
  const title: string = rawTitle.trim();

  if (title) {
    todoStorage.saveTodo({title: title}).then((todo: Todo) =>
      update((model: Model) => {
        model.todosById[todo.id] = todo;
        model.todoIds.push(todo.id);
        model.newTodo = "";
        return model;
      })
    );
  }
};

const newTodoKeyUp: (update: Function) => EventHandler<KeyboardEvent<HTMLInputElement>> =
  (update: Function) => (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === ENTER_KEY) {
      saveNewTodo(update, evt.currentTarget.value);
    }
    else {
      updateNewTodo(update, evt.currentTarget.value);
    }
  };

const newTodoKeyUpEnterOnly: (update: Function) => EventHandler<KeyboardEvent<HTMLInputElement>> =
  (update: Function) => (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      saveNewTodo(update, evt.currentTarget.value);
    }
  };

const newTodoChange: (update: Function) => EventHandler<ChangeEvent<HTMLInputElement>> =
  (update: Function) => (evt: ChangeEvent<HTMLInputElement>) => updateNewTodo(update, evt.currentTarget.value);

export const actions = {
  newTodoKeyUp,
  newTodoKeyUpEnterOnly,
  newTodoChange
};
