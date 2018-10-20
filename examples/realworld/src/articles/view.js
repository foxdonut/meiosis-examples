import O from "patchinko/constant"

export const view = ({ articleSummary, pager }) => model => [
  model.articles.map(articleSummary),
  pager(O({ total: model.articlesCount }, model.articlesFilter))
]
