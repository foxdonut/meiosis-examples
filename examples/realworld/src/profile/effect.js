import { Route } from "../router"
import { getArticlesFilter } from "../util/filter"
import { articlesApi, profileApi } from "../services"
import { selectors } from "../selectors"

const loadProfileAndArticles = ({ state, update, username, author, favorited }) => {
  const filter = getArticlesFilter(state)

  return Promise.all([
    !state.profile || state.profile.username !== username ? profileApi.get(username) : null,
    articlesApi.getList({
      limit: filter.limit,
      offset: filter.offset,
      author,
      favorited
    })
  ]).then(data => update([data, { routeChanged: false }]))
}

export const Effect = update => state => {
  if (
    state.routeChanged &&
    (selectors.page(state) === Route.Profile || selectors.page(state) === Route.ProfileFavorites)
  ) {
    if (selectors.page(state) === Route.Profile) {
      const { username } = selectors.params(state)
      loadProfileAndArticles({ state, update, username, author: username })
    } else if (selectors.page(state) === Route.ProfileFavorites) {
      const { username } = selectors.params(state)
      loadProfileAndArticles({ state, update, username, favorited: username })
    }
  }
}
