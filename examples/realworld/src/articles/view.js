import { ArticleSummary } from "../articleSummary"
import { Pager } from "../pager"

export const Articles = ({ state, actions, routing }) => [
  state.loading || !state.articles
    ? [".article-preview", "Loading articles..."]
    : state.articles.map(article => ArticleSummary({ state, actions, article })),
  Pager({ state, routing })
]
