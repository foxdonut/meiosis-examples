import { compose } from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";

export const pager = {
  create: compose(createView, createActions)
};
