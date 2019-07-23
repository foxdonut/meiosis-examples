import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { helpers } from "../root/helpers"
import { getArticlesFilter } from "../routes"
import { pick } from "../util/fp"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "Home"), arrive => {
    update({ loading: true })

    const filter = getArticlesFilter(state.route.current)

    if (arrive.params.feed) {
      helpers
        .loadFeed(Object.assign({}, pick(["limit", "offset"], filter)))
        .then(data => update([data, { loading: false }]))
    } else {
      helpers.loadArticles(filter).then(data => update([data, { loading: false }]))
    }
  })
}
