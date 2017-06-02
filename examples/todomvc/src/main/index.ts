import * as _ from "lodash";
import { UpdateFunction, ViewFunction } from "meiosis";

import { todoItem } from "../todoItem";
import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const main = {
  create: (update: UpdateFunction, parentUpdates: any): ViewFunction => {
    const updates = _.extend({}, createUpdates(update), parentUpdates);
    const actions = createActions(updates);

    const components = {
      todoItem: todoItem.create(update, updates)
    };
    return createView(actions, components);
  }
};
