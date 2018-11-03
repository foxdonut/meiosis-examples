export const service = (model, patch) => patch.params ?
  // synchronize articlesFilter
  ({
    articlesFilter: {
      limit: patch.params.limit || model.articlesFilter.limit,
      offset: patch.params.offset || 0,
      tag: model.articlesFilter.tag || patch.params.tag,
      author: model.articlesFilter.author || patch.params.author,
      favorited: model.articlesFilter.favorited || patch.params.favorited
    }
  })
  : null
