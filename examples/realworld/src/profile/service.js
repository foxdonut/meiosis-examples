import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { getArticlesFilter } from "../routes"
import { helpers } from "../root/helpers"

const loadProfileAndArticles = ({ state, update, username, author, favorited }) => {
  const filter = getArticlesFilter(state.route.current)

  return Promise.all([
    helpers.loadProfile({ username }),
    helpers.loadArticles({
      limit: filter.limit,
      offset: filter.offset,
      author,
      favorited
    })
  ]).then(update)
}

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "Profile"), arrive => {
    const { username } = arrive.params
    loadProfileAndArticles({ state, update, username, author: username }) // FIXME: or params.author?
  })

  whenPresent(findRouteSegment(state.route.arrive, "ProfileFavorites"), arrive => {
    const { username } = arrive.params
    loadProfileAndArticles({ state, update, username, favorited: username })
  })
}
