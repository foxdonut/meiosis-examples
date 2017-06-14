import { merge } from "ramda";

import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";
import { todoItem } from "../todoItem";

export const todoList = {
  model,
  create: parentActions => update => {
    const actions = createActions(update);

    const components = {
      todoItem: todoItem.create(merge(parentActions, actions))(update)
    };
    return createView(components);
  }
};
