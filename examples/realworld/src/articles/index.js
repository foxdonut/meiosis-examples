import { createView } from "./view"
import { createArticleSummary } from "../articleSummary"
import { createPager } from "../pager"

export const createArticles = ({ navigator, update }) => {
  const components = {
    articleSummary: createArticleSummary({ navigator, update }),
    pager: createPager(update)
  }

  return {
    view: createView(components)
  }
}
