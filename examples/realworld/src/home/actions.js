export const actions = ({ actions }) => ({
  clearTagFilter: () => actions.loadArticles({ tag: null })
})
