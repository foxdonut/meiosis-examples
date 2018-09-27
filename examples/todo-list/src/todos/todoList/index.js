import { view } from "./view.jsx";
import { TodoItem } from "./todoItem";

export const TodoList = {
  dependencies: [
    { todoItem: TodoItem }
  ],
  view
};
