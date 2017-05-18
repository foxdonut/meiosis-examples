import { compose } from "ramda";

import { createActions } from "realworld-common/src/popularTags/actions";
import { createView } from "./view";

export const popularTags = {
  create: compose(createView, createActions)
};
