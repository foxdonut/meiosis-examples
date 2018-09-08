import O from "patchinko/constant"

import { createView } from "./view"
import { createArticles } from "../articles"
import { createPopularTags } from "../popularTags"
import { articlesApi, popularTagsApi } from "../services"

export const createHome = ({ update }) => {
  const components = {
    articles: createArticles(update),
    popularTags: createPopularTags(update)
  }
  return {
    navigating: ({ update }) => {
      Promise.all([
        articlesApi.getList(),
        popularTagsApi.get()
      ]).then(
        ([articles, tags]) => update(O(articles, tags))
      )
    },
    view: createView(components)
  }
}
