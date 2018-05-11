import { compose } from "ramda";

import { createActions } from "realworld-state/pager/actions";
import { createView } from "./view";

export const pager = {
  create: compose(createView, createActions)
};
