import { articlesApi, loadArticlesAndTags } from "../services"
import { getArticlesFilter } from "../routes"
import { pick } from "../util/fp"

export const effect = ({ state, update }) => {
  if (state.routeTransition.arrive.Home) {
    const filter = getArticlesFilter(state.route)

    state.routeTransition.arrive.Home.params.feed
      ? articlesApi
          .getFeed(pick(["limit", "offset"], filter))
          .then(data => update([data, { loading: false }]))
      : loadArticlesAndTags(filter).then(data => update([data, { loading: false }]))
  }
}
