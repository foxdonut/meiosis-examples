import O from "patchinko/overloaded"

export const createView = ({ articleSummary, pager }) => model => [
  model.articles.map(articleSummary.view),
  pager.view(O({ total: model.articlesCount }, model.articlesFilter))
]
