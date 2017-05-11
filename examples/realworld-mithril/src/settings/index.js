import { compose } from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";

export const settings = {
  create: compose(createView, createActions)
};
