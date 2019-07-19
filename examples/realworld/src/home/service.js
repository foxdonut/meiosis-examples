import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { helpers } from "../root/helpers"
import { pick } from "../util/fp"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "Home"), arrive => {
    update({ loading: true })

    if (arrive.params.feed) {
      helpers
        .loadFeed(Object.assign({}, pick(["limit", "offset"], state.articlesFilter)))
        .then(data => update([data, { loading: false }]))
    } else {
      helpers.loadArticles(state.articlesFilter).then(data => update([data, { loading: false }]))
    }
  })
}
