import { compose } from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";

export const login = {
  create: compose(createView, createActions)
};
