import { createActions } from "realworld-common/src/home/actions";
import { createView } from "./view";

import { articles } from "../articles";
import { popularTags } from "../popularTags";

export const home = {
  create: update => {
    const components = {
      Articles: articles.create(update),
      popularTags: popularTags.create(update)
    };
    return createView(createActions(update), components);
  }
};
