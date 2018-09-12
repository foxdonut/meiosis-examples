import O from "patchinko/constant"

import { createView } from "./view"
import { createArticles } from "../articles"
import { createPopularTags } from "../popularTags"
import { articlesApi, popularTagsApi } from "../services"

export const createHome = ({ navigator, update }) => {
  const components = {
    articles: createArticles({ navigator, update }),
    popularTags: createPopularTags(update)
  }
  return {
    navigating: ({ navigate }) => {
      Promise.all([
        articlesApi.getList(),
        popularTagsApi.get()
      ]).then(
        ([articles, tags]) => {
          update(O(articles, tags))
          navigate()
        }
      )
    },
    view: createView(components)
  }
}
