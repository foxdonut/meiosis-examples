import * as _ from "lodash";
import { VNode } from "snabbdom/vnode";
import { Todo, UpdateFunction } from "../util";

import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const createTodoEdit = (update: UpdateFunction, parentUpdates: any) => {
  const updates = _.extend({}, createUpdates(update), parentUpdates);
  const actions = createActions(updates);
  return {
    view: createView(actions)
  };
};
