import { ArticleSummary } from "../articleSummary"
import { Pager } from "../pager"

export const Articles = ({ state, actions }) => [
  //state.articles.map(article => articleSummary(state, article)),
  state.articles.map((article, idx) => [["div", "#", idx], ArticleSummary({ state, actions, article })]),
  Pager({ state, actions })
]

