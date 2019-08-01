import { findRouteSegment, whenPresent } from "meiosis-routing/state"

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
  whenPresent(findRouteSegment(state.route.arrive, "Profile"), arrive => {
    const { username } = arrive.params
    loadProfileAndArticles({ state, update, username, author: username })
  })

  whenPresent(findRouteSegment(state.route.arrive, "ProfileFavorites"), arrive => {
    const { username } = arrive.params
    loadProfileAndArticles({ state, update, username, favorited: username })
  })
}
