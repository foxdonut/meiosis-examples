import { compose } from "ramda";

import { createActions } from "realworld-state/popularTags/actions";
import { createView } from "./view";

export const popularTags = {
  create: compose(createView, createActions)
};
