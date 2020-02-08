import { getArticlesFilter } from "../routes"
import { articlesApi, profileApi } from "../services"

const loadProfileAndArticles = ({ state, update, username, author, favorited }) => {
  update({ loading: true })

  const filter = getArticlesFilter(state.route)

  return Promise.all([
    !state.profile || state.profile.username !== username ? profileApi.get(username) : null,
    articlesApi.getList({
      limit: filter.limit,
      offset: filter.offset,
      author,
      favorited
    })
  ]).then(data => update([data, { loading: false }]))
}

export const service = ({ state }) => {
  // Leaving either profile page and not arriving at the other
  if (
    (state.routeTransition.leave.Profile || state.routeTransition.leave.ProfileFavorites) &&
    !(state.routeTransition.arrive.Profile || state.routeTransition.arrive.ProfileFavorites)
  ) {
    return { profile: null }
  }

  // FIXME
  if (state.routeTransition.arrive.Profile) {
    return {
      next: ({ state, update }) => {
        const { username } = state.routeTransition.arrive.Profile.params
        loadProfileAndArticles({ state, update, username, author: username })
      }
    }
  }

  if (state.routeTransition.arrive.ProfileFavorites) {
    return {
      next: ({ state, update }) => {
        const { username } = state.routeTransition.arrive.ProfileFavorites.params
        loadProfileAndArticles({ state, update, username, favorited: username })
      }
    }
  }
}
