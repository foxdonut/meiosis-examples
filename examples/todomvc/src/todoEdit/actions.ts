import { ChangeEvent, EventHandler, FocusEvent, KeyboardEvent } from "react";
import { Promise } from "es6-promise";
import { todoStorage } from "../app/todo-storage";
import { Model, Todo } from "../util";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

const editBlur: (update: Function, id: string) => EventHandler<FocusEvent<HTMLInputElement>> =
  (update: Function, id: string) => (evt: FocusEvent<HTMLInputElement>) =>
    todoStorage.saveTodo({ id, title: evt.currentTarget.value }).then((todo: Todo) => update((model: Model) => {
      model.todosById[todo.id] = todo;
      model.editTodo = { };
      return model;
    }));

const editChange: (update: Function, id: string) => EventHandler<ChangeEvent<HTMLInputElement>> =
  (update: Function, id: string) => (evt: ChangeEvent<HTMLInputElement>) =>
    update((model: Model) => {
      model.editTodo = { id, title: evt.currentTarget.value };
      return model;
    });

const editKeyUp: (update: Function, id: string) => EventHandler<KeyboardEvent<HTMLInputElement>> =
  (update: Function, id: string) => (evt: KeyboardEvent<HTMLInputElement>) => {
    const targetValue: string = evt.currentTarget.value;

    if (evt.keyCode === ESCAPE_KEY || evt.which === ESCAPE_KEY) {
      update((model: Model) => {
        model.editTodo = { };
        return model;
      });
    }
    else if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      const todo = { id, title: targetValue };
      const editing = !!todo.id;
      todo.title = todo.title.trim();

      if (editing && todo.title) {
        todoStorage.saveTodo(todo).then((todo: Todo) => update((model: Model) => {
          model.todosById[todo.id] = todo;
          model.editTodo = { };
          return model;
        }));
      }
    }
    else {
      update((model: Model) => {
        model.editTodo = ({ id, title: targetValue });
        return model;
      });
    }
  };

export const actions = {
  editBlur,
  editChange,
  editKeyUp
};
