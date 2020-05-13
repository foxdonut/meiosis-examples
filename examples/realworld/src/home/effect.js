import { articlesApi, loadArticlesAndTags } from "../services"
import { Route } from "../router"
import { identity, pick, when } from "../util/fp"
import { getArticlesFilter } from "../util/filter"

const getOffset = route => when(identity, parseInt, route.params.queryParams.offset) || 0

export const Effect = update => state => {
  if (
    state.route.page === Route.Home &&
    !state.loading &&
    (!state.previousQuery || state.previousQuery.offset !== getOffset(state.route))
  ) {
    update({ loading: true })

    const filter = getArticlesFilter(state.route)

    state.route.params.feed
      ? articlesApi
          .getFeed(pick(["limit", "offset"], filter))
          .then(data => update([data, { loading: false, previousQuery: filter }]))
      : loadArticlesAndTags(filter).then(data =>
          update([data, { loading: false, previousQuery: filter }])
        )
  }
}
