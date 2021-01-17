import { articlesApi, loadArticlesAndTags } from "../services"
import { pick } from "../util/fp"
import { getArticlesFilter } from "../util/filter"
import { Route } from "../router"

export const Effect = update => state => {
  if (state.route.page === Route.Home) {
    const filter = getArticlesFilter(state)

    filter.feed
      ? articlesApi.getFeed(pick(["limit", "offset"], filter)).then(update)
      : loadArticlesAndTags(filter).then(update)
  }
}
