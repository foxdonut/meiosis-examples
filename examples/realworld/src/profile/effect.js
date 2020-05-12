import { Route } from "../router"
import { getArticlesFilter } from "../util/filter"
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

export const Effect = update => state => {
  if (!state.profile) {
    if (state.route.page === Route.Profile) {
      const { username } = state.route.params
      loadProfileAndArticles({ state, update, username, author: username })
    } else if (state.route.page === Route.ProfileFavorites) {
      const { username } = state.route.params
      loadProfileAndArticles({ state, update, username, favorited: username })
    }
  }
}
