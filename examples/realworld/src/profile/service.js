import { findRouteSegment, whenPresent } from "meiosis-routing/state"

import { helpers } from "../root/helpers"

const loadProfileAndArticles = ({ state, update, username, author, favorited }) =>
  Promise.all([
    helpers.loadProfile({ username }),
    helpers.loadArticles({
      limit: state.articlesFilter.limit,
      offset: state.articlesFilter.offset,
      author,
      favorited
    })
  ]).then(([profile, articles]) => update([profile, articles]))

export const service = ({ state, update }) => {
  whenPresent(findRouteSegment(state.route.arrive, "Profile"), arrive => {
    const { username } = arrive.params
    loadProfileAndArticles({ state, update, username, author: username })// FIXME: or params.author?
  })

  whenPresent(findRouteSegment(state.route.arrive, "ProfileFavorites"), arrive => {
    const { username } = arrive.params
    loadProfileAndArticles({ state, update, username, favorited: username })
  })
}

