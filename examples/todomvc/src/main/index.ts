import * as _ from "lodash";
import { VNode } from "snabbdom/vnode";
import { State, UpdateFunction } from "../util";

import { createTodoItem } from "../todoItem";
import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const createMain = (update: UpdateFunction, parentUpdates: any) => {
  const updates = _.extend({}, createUpdates(update), parentUpdates);
  const actions = createActions(updates);

  const components = {
    todoItem: createTodoItem(update, updates)
  };
  return {
    view: createView(actions, components)
  };
};
