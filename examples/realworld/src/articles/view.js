import O from "patchinko/constant"

import { path } from "../util/fp"

export const createView = ({ articleSummary, pager }) => model => [
  path(["articles"], model, []).map(articleSummary.view),
  pager.view(O({ total: model.articlesCount }, model.articlesFilter))
]
