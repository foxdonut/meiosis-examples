import { compose } from "ramda";

import { createActions } from "realworld-common/src/articleEdit/actions";
import { createView } from "./view";

export const articleEdit = {
  model: () => ({
    body: "",
    description: "",
    tagList: [],
    tags: "",
    title: ""
  }),
  create: compose(createView, createActions)
};
