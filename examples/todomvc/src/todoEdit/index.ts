import * as _ from "lodash";
import { UpdateFunction, ViewFunction } from "meiosis";

import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const todoEdit = {
  create: (update: UpdateFunction, parentUpdates: any): ViewFunction => {
    const updates = _.extend({}, createUpdates(update), parentUpdates);
    const actions = createActions(updates);
    return createView(actions);
  }
};
