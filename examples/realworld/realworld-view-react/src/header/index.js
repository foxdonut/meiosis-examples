import { compose } from "ramda";

import { createActions } from "realworld-state/header/actions";
import { createView } from "./view";

export const header = {
  create: compose(createView, createActions)
};
