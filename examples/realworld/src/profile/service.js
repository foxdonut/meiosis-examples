import { findRouteSegment } from "meiosis-routing/state"

import { getArticlesFilter } from "../routes"
import { loadArticles, profileApi } from "../services"

const loadProfileAndArticles = ({ state, update, username, author, favorited }) => {
  update({ loading: true })

  const filter = getArticlesFilter(state.route.current)

  return Promise.all([
    profileApi.get(username),
    loadArticles({
      limit: filter.limit,
      offset: filter.offset,
      author,
      favorited
    })
  ]).then(data => update([data, { loading: false }]))
}

export const service = ({ state, update }) => {
  const segment = state.route.current[0]
  const inProfile = segment.id === "Profile"
  const arriveProfile = findRouteSegment(state.route.arrive, "Profile")
  const arriveFavorites = findRouteSegment(state.route.arrive, "Favorites")
  const leaveFavorites = findRouteSegment(state.route.leave, "Favorites")
  const { username } = segment.params

  if (arriveFavorites) {
    loadProfileAndArticles({ state, update, username, favorited: username })
  } else if (arriveProfile || (leaveFavorites && inProfile)) {
    loadProfileAndArticles({ state, update, username, author: username })
  }
}
