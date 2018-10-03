import { view } from "./view"
import { ArticleSummary } from "../articleSummary"
import { Pager } from "../pager"

export const Articles = {
  dependencies: {
    articleSummary: ArticleSummary,
    pager: Pager
  },
  view
}
