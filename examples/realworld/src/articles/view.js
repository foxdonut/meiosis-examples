import { ArticleSummary } from "../articleSummary"
import { Pager } from "../pager"

export const Articles = ({ state, actions }) => [
  state.articles.map(article => ArticleSummary({ state, actions, article })),
  Pager({ state, actions })
]
