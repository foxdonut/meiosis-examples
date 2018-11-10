import O from "patchinko/constant"

export const view = ({ articleSummary, pager }) => model => [
  //model.articles.map(article => articleSummary(model, article)),
  model.articles.map((article, idx) => [["div", "#", idx], articleSummary(model, article)]),
  pager(O({ total: model.articlesCount }, model.articlesFilter))
]
