import O from "patchinko/constant"

export const view = ({ articleSummary, pager }) => model => [
  model.articles.map(article => articleSummary(model, article)),
  pager(O({ total: model.articlesCount }, model.articlesFilter))
]
