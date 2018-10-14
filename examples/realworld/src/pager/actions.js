export const actions = ({ actions }) => ({
  page: ({ model, pageNumber }) => {
    const offset = (pageNumber - 1) * model.limit
    actions.loadArticles({ offset, limit: model.limit })
  }
})
