import O from "patchinko/constant"

export const actions = ({ update, actions }) => ({
  clearTagFilter: () => actions.loadArticles({ tag: null }).then(articles =>
    update(O(articles, { tagFilter: null })))
})
