import { createFooter } from "../footer";
import { createHeader } from "../header";
import { createMain } from "../main";
import { createRouter } from "../router";
import { Model, UpdateFunction, ViewFunction } from "../util";
import { state } from "./state";

import { createActions } from "./actions";
import { createUpdates } from "./updates";
import { createView } from "./view";

const createAppRouter = (update: UpdateFunction) => {
  const updates = createUpdates(update);
  const actions = createActions(updates);
  return createRouter(actions);
};

export const createApp = (update: UpdateFunction) => {
  const updates = createUpdates(update);
  const actions = createActions(updates);

  const components = {
    footer: createFooter(update, actions),
    header: createHeader(update),
    main: createMain(update, updates)
  };

  return {
    view: createView(components),
    state,
    createRouter: () => createAppRouter(update)
  };
};
