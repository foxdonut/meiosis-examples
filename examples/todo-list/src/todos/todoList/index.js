import { view } from "./view.jsx";
import { TodoItem } from "./todoItem";

export const TodoList = {
  view: actions => {
    const todoItem = TodoItem.view(actions);
    return view({ actions, todoItem });
  }
};
