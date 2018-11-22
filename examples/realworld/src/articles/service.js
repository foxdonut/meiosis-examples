export const service = model => model.route.params ?
  // synchronize articlesFilter
  ({
    articlesFilter: {
      limit: model.route.params.limit || model.articlesFilter.limit,
      offset: model.route.params.offset || 0,
      tag: model.route.params.tag,
      author: model.articlesFilter.author || model.route.params.author,
      favorited: model.articlesFilter.favorited || model.route.params.favorited
    }
  })
  : null
