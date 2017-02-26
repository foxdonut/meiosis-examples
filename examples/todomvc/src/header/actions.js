import flyd from "flyd";
import { todoStorage } from "../app/todo-storage";

const ENTER_KEY = 13;

export const actions = {
  newTodo: flyd.stream(),
  saveNewTodo: flyd.stream()
};

const saveNewTodo = title => {
  title = title.trim();

  if (title) {
    todoStorage.saveTodo({title: title}).then(todo => actions.saveNewTodo(todo));
  }
};

export const intents = {
  newTodoKeyUp: evt => {
    if (evt.keyCode === ENTER_KEY) {
      saveNewTodo(evt.target.value);
    }
    else {
      actions.newTodo(evt.target.value);
    }
  },
  newTodoKeyUpEnterOnly: evt => {
    if (evt.keyCode === ENTER_KEY || evt.which === ENTER_KEY) {
      saveNewTodo(evt.target.value);
    }
  },
  newTodoChange: evt => actions.newTodo(evt.target.value)
};
