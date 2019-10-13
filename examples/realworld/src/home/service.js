import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { articlesApi, loadArticlesAndTags } from "../services"
import { getArticlesFilter } from "../routes"
import { pick } from "../util/fp"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "Home"), arrive => {
    update({ loading: true })

    const filter = getArticlesFilter(state.route.current)

    return arrive.params.feed
      ? articlesApi
          .getFeed(pick(["limit", "offset"], filter))
          .then(data => update([data, { loading: false }]))
      : loadArticlesAndTags(filter).then(data => update([data, { loading: false }]))
  })
}
