import { articlesApi, loadArticlesAndTags } from "../services"
import { Route } from "../router"
import { pick } from "../util/fp"
import { getArticlesFilter } from "../util/filter"
import { selectors } from "../state"

export const Effect = update => state => {
  if (selectors.page(state) === Route.Home && state.loading) {
    const filter = getArticlesFilter(state)

    selectors.params(state).feed
      ? articlesApi
          .getFeed(pick(["limit", "offset"], filter))
          .then(data => update([data, { loading: false }]))
      : loadArticlesAndTags(filter).then(data => update([data, { loading: false }]))
  }
}
