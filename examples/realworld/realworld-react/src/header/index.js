import { compose } from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";

export const header = {
  create: compose(createView, createActions)
};
