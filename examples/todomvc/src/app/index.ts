import { UpdateFunction, ViewFunction } from "meiosis";

import { footer } from "../footer";
import { header } from "../header";
import { main } from "../main";
import { createRouter } from "../router";
import { Model } from "../util";
import { state } from "./state";

import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

export const app = {
  create: (update: UpdateFunction): ViewFunction => {
    const updates = createUpdates(update);
    const actions = createActions(updates);

    const components = {
      footer: footer.create(update, actions),
      header: header.create(update),
      main: main.create(update, updates)
    };

    return createView(components);
  },
  createRouter: (update: UpdateFunction) => {
    const updates = createUpdates(update);
    const actions = createActions(updates);
    return createRouter(actions);
  },
  state
};
