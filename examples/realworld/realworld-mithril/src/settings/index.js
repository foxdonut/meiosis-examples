import { compose } from "ramda";

import { createActions } from "realworld-common/src/settings/actions";
import { createView } from "./view";

export const settings = {
  create: compose(createView, createActions)
};
