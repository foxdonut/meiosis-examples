import { merge } from "ramda";

import { model } from "./model";
import { createActions } from "./actions";
import { createView } from "./view.jsx";
import { createTodoItem } from "../todoItem";
import { uncurry } from "../util/functional";

export const createTodoList = uncurry(parentActions => update => {
  const actions = createActions(update);

  const components = {
    todoItem: createTodoItem(merge(parentActions, actions))(update)
  };

  return {
    model,
    view: createView(components)
  };
});
