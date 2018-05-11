import { compose } from "ramda";

import { createActions } from "realworld-state/articleDetail/actions";
import { createView } from "./view";

export const articleDetail = {
  create: compose(createView, createActions)
};
