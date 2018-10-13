import O from "patchinko/constant"

export const actions = ({ update, actions }) => ({
  tagFilter: tag => actions.loadArticles({ tag }).then(articles =>
    update(O(articles, { tagFilter: tag })))
})
