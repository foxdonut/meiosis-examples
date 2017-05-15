import { createActions } from "./actions";
import { createView } from "./view";

import { articles } from "../articles";

export const profile = {
  create: update => {
    const components = {
      Articles: articles.create(update)
    };
    const actions = createActions(update);
    return createView(actions, components);
  }
};
