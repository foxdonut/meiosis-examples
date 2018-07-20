import { createView } from "./view"

import { createArticles } from "../articles"
import { createPopularTags } from "../popularTags"

export const createHome = _navigator => update => {
  const components = {
    articles: createArticles(update),
    popularTags: createPopularTags(update)
  }
  return {
    view: createView(components)
  }
}
