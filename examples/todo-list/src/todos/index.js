import { model } from "./model";
import { actions } from "./actions";
import { view } from "./view.jsx";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";

export const Todos = {
  dependencies: [
    { todoForm: TodoForm },
    { todoList: TodoList }
  ],
  model,
  actions,
  view
};
