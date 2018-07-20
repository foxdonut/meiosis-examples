//import { articlesApi, popularTagsApi } from "../services"

export const createActions = _update => ({
  loadPopularTags: () => null /* popularTagsApi.get().then(
    popularTags => update({ tags: popularTags.tags })
  )*/,

  tagFilter: _tag => null /* {
    articlesApi.getList({ tag, limit: 10 }).then(
      articles => update(model => _.merge(model, { tagFilter: tag }, articles))
    )
  }*/
})
