import * as m from "mithril";

import { State } from "../util";
import { createUpdates } from "./updates";
import { createActions } from "./actions";
import { createView } from "./view-mithril";

export const header = {
  create: (update: Function, events: any) => {
    const updates: any = createUpdates(update);
    const actions = createActions(updates, events);

    return createView(actions);
  }
};
