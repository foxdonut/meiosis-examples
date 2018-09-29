import { view } from "./view.jsx";
import { TodoItem } from "./todoItem";

export const TodoList = {
  dependencies: [
    { component: TodoItem, key: "todoItem" }
  ],
  view
};
