import { Model, Todo, todoStorage } from "../util";

const ENTER_KEY = 13;

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
