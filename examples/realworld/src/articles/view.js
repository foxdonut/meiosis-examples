import O from "patchinko/constant"

import { defaultTo, path } from "../util/fp"

export const view = ({ articleSummary, pager }) => model => [
  defaultTo([], path(["articles"], model)).map(articleSummary.view),
  pager.view(O({ total: model.articlesCount }, model.articlesFilter))
]
