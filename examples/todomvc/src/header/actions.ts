import { ChangeEvent, EventHandler, KeyboardEvent } from "react";
import { Model, Todo } from "../util";
import { todoStorage } from "../app/todo-storage";

const ENTER_KEY = 13;

const newTodoKeyUp: EventHandler<KeyboardEvent<HTMLInputElement>> = (evt: KeyboardEvent<HTMLInputElement>) => {
/*
  if (evt.keyCode === ENTER_KEY) {
    saveNewTodo(evt.currentTarget.value);
  }
  else {
    actions.newTodo(evt.currentTarget.value);
  }
*/
};

const newTodoKeyUpEnterOnly: (update: Function) => EventHandler<KeyboardEvent<HTMLInputElement>> =
  (update: Function) => (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      const title: string = evt.currentTarget.value.trim();
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
    }
  };

const newTodoChange: (update: Function) => EventHandler<ChangeEvent<HTMLInputElement>> =
  (update: Function) => (evt: ChangeEvent<HTMLInputElement>) => update(
    (model: Model) => {
      model.newTodo = evt.currentTarget.value;
      return model;
    });

export const actions = {
  newTodoKeyUp,
  newTodoKeyUpEnterOnly,
  newTodoChange
};
