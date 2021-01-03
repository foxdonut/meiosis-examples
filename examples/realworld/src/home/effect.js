import { articlesApi, loadArticlesAndTags } from "../services"
import { pick } from "../util/fp"
import { getArticlesFilter } from "../util/filter"
import { Route } from "../router"
import { selectors } from "../selectors"

export const Effect = update => state => {
  if (selectors.page(state) === Route.Home) {
    const filter = getArticlesFilter(state)

    filter.feed
      ? articlesApi.getFeed(pick(["limit", "offset"], filter)).then(update)
      : loadArticlesAndTags(filter).then(update)
  }
}
