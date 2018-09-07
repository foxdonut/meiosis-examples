import { createView } from "./view"

import { createArticles } from "../articles"
import { createPopularTags } from "../popularTags"
import { articlesApi } from "../services"

export const createHome = _navigator => update => {
  const components = {
    articles: createArticles(update),
    popularTags: createPopularTags(update)
  }
  return {
    navigating: (params, update) => articlesApi.getList().then(update),
    view: createView(components)
  }
}
