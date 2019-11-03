import { articlesApi, loadArticlesAndTags } from "../services"
import { getArticlesFilter } from "../routes"
import { pick } from "../util/fp"

export const service = ({ state }) => {
  if (state.routeTransition.arrive.Home) {
    return {
      state: { loading: true },
      next: ({ update }) => {
        const filter = getArticlesFilter(state.route)

        return state.routeTransition.arrive.Home.params.feed
          ? articlesApi
              .getFeed(pick(["limit", "offset"], filter))
              .then(data => update([data, { loading: false }]))
          : loadArticlesAndTags(filter).then(data => update([data, { loading: false }]))
      }
    }
  }
}
