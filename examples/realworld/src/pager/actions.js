import O from "patchinko/constant"

export const actions = ({ update, actions }) => ({
  page: ({ model, pageNumber }) => {
    const offset = (pageNumber - 1) * model.limit
    actions.loadArticles({ offset, limit: model.limit })
      .then(articles => update(Object.assign(articles, { articlesFilter: O({ offset }) })))
  }
})
