import { model } from "./model";
import { createView } from "./view.jsx";
import { todoItem } from "../todoItem";

export const todoList = {
  model,
  create: (update) => {
    const components = {
      todoItem: todoItem.create(update)
    }
    return createView(components);
  }
};
