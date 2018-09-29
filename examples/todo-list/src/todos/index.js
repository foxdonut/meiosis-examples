import { model } from "./model";
import { actions } from "./actions";
import { view } from "./view.jsx";
import { TodoForm } from "./todoForm";
import { TodoList } from "./todoList";

export const Todos = {
  dependencies: [
    { component: TodoForm, key: "todoForm", model: "todoForm" },
    { component: TodoList, key: "todoList" }
  ],
  model,
  actions,
  view
};
