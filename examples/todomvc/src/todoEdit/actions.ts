import { Promise } from "es6-promise";
import { Model, Todo, todoStorage } from "../util";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export const createActions = (updates: any) => ({
  editBlur: (id: string) => (evt: any) =>
    todoStorage.saveTodo({ id, title: evt.currentTarget.value }).then(updates.updateTodo),

  editKeyUp: (id: string) => (evt: any) => {
    const title: string = evt.currentTarget.value;

    if (evt.keyCode === ESCAPE_KEY || evt.which === ESCAPE_KEY) {
      updates.cancelEdit();
    }
    else if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      const todo = { id, title };
      const editing = !!todo.id;
      todo.title = todo.title.trim();

      if (editing && todo.title) {
        todoStorage.saveTodo(todo).then(updates.updateTodo);
      }
    }
    else {
      updates.editingTodo(id, title);
    }
  }
});
