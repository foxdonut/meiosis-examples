import { createView } from "./view"
import { createArticleSummary } from "../articleSummary"
import { createPager } from "../pager"

export const createArticles = update => {
  const components = {
    articleSummary: createArticleSummary(update),
    pager: createPager(update)
  }

  return {
    view: createView(components)
  }
}
