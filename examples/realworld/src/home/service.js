import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { helpers } from "../root/helpers"
import { pick } from "../util/fp"

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "Home"), arrive => {
    // setTimeout(() => update({ loading: HomePage }), 300)

    if (arrive.params.feed) {
      helpers
        .loadFeed(
          Object.assign(
            {},
            pick(["limit", "offset"], state.articlesFilter)/*,
            navigation.route.params*/
          )
        )
        .then(update)
    } else {
      helpers
        .loadArticles(
          // FIXME
          Object.assign({}, state.articlesFilter/*, navigation.query, {
            tag: navigation.query && navigation.query.tag
          }*/)
        )
        .then(update)
          // data => update(Object.assign({ loading: null }, data))
    }
  })
}

