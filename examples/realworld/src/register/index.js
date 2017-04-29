import { compose } from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";

export const register = {
  create: compose(createView, createActions)
};
