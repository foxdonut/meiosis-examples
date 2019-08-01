import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { articlesApi, loadArticles } from "../services"
import { getArticlesFilter } from "../routes"
import { identity, ifElse, pick } from "../util/fp"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "Home"), arrive => {
    update({ loading: true })

    const filter = getArticlesFilter(state.route.current)

    return ifElse(
      identity,

      () =>
        articlesApi
          .getFeed(pick(["limit", "offset"], filter))
          .then(data => update([data, { loading: false }])),

      () => loadArticles(filter).then(data => update([data, { loading: false }])),

      arrive.params.feed
    )
  })
}
