import flyd from "flyd";
import { todoStorage } from "../app/todo-storage";

export const actions = {
  clearEdit: flyd.stream(),
  editingTodo: flyd.stream(),
  saveTodo: flyd.stream()
};

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export const intents = {
  editBlur: id => evt => todoStorage.saveTodo({ id, title: evt.target.value }).then(actions.saveTodo),
  editChange: id => evt => actions.editingTodo({ id, title: evt.target.value }),
  editKeyUp: id => evt => {
    if (evt.keyCode === ESCAPE_KEY || evt.which === ESCAPE_KEY) {
      actions.clearEdit(true);
    }
    else if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      const todo = { id, title: evt.target.value };
      const editing = !!todo.id;
      todo.title = todo.title.trim();

      if (editing && todo.title) {
        todoStorage.saveTodo(todo).then(actions.saveTodo);
      }
    }
    else {
      actions.editingTodo({ id, title: evt.target.value });
    }
  }
};
