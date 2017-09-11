import { VNode } from "snabbdom/vnode";
import { createTodoEdit } from "../todoEdit";
import { State, UpdateFunction } from "../util";
import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const createTodoItem = (update: UpdateFunction, parentUpdates: any) => {
  const updates = createUpdates(update);
  const actions = createActions(updates);

  const components = {
    todoEdit: createTodoEdit(update, parentUpdates)
  };
  return {
    view: createView(actions, components)
  };
};
