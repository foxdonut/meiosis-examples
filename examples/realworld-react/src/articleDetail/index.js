import { compose } from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";

export const articleDetail = {
  create: compose(createView, createActions)
};
