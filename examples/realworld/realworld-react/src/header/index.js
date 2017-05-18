import { compose } from "ramda";

import { createActions } from "realworld-common/src/header/actions";
import { createView } from "./view";

export const header = {
  create: compose(createView, createActions)
};
