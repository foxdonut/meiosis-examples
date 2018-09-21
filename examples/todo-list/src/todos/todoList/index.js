import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";
import { createTodoItem } from "./todoItem";

export const createTodoList = id => {
  const todoItem = createTodoItem();

  return {
    model: model(id),
    createActions: createActions(id),
    createView: createView(id, { todoItem })
  };
};
