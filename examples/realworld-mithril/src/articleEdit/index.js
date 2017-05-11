import { compose } from "ramda";

import { createActions } from "./actions";
import { createView } from "./view";

export const articleEdit = {
  create: compose(createView, createActions)
};
