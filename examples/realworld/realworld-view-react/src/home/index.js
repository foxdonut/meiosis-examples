import { createView } from "./view";

import { articles } from "../articles";
import { popularTags } from "../popularTags";

export const homePageId = "home";

export const createHome = update => {
  const components = {
    // Articles: articles.create(update),
    // PopularTags: popularTags.create(update)
  };
  return { id: homePageId, view: createView(components) };
};
