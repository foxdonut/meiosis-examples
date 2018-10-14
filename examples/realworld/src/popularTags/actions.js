export const actions = ({ actions }) => ({
  tagFilter: tag => actions.loadArticles({ tag })
})
