import { compose } from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";

export const popularTags = {
  create: compose(createView, createActions)
};
