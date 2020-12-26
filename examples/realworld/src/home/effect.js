import { articlesApi, loadArticlesAndTags } from "../services"
import { Route } from "../router"
import { pick } from "../util/fp"
import { getArticlesFilter } from "../util/filter"
import { selectors } from "../selectors"

export const Effect = update => state => {
  if (selectors.page(state) === Route.Home && state.routeChanged) {
    const filter = getArticlesFilter(state)

    selectors.params(state).feed
      ? articlesApi
          .getFeed(pick(["limit", "offset"], filter))
          .then(data => update([data, { routeChanged: false }]))
      : loadArticlesAndTags(filter).then(data => update([data, { routeChanged: false }]))
  }
}
