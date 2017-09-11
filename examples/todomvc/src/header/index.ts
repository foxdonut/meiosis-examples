import { VNode } from "snabbdom/vnode";
import { State, UpdateFunction } from "../util";
import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const createHeader = (update: UpdateFunction) => {
  const updates = createUpdates(update);
  const actions = createActions(updates);

  return {
    view: createView(actions)
  };
};
