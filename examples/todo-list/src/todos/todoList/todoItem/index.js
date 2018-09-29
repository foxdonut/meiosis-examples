import { view } from "./view.jsx";
import { TodoForm } from "../../todoForm";

export const TodoItem = {
  dependencies: [
    { component: TodoForm, key: "todoForm" }
  ],
  view
};
