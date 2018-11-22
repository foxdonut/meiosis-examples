import { helpers } from "../root/helpers"
import { pick } from "../util/fp"

export const navigate = {
  Home: () => ({ model, route, update }) => {
    // setTimeout(() => update({ loading: HomePage }), 300)

    if (route.feed) {
      helpers.loadFeed(
        Object.assign({}, pick(["limit", "offset"], model.articlesFilter), route.params)
      ).then(data => update(Object.assign(data, { route })))
    }
    else {
      helpers.loadArticles(
        Object.assign({}, model.articlesFilter, route.params)
      ).then(
        data => update(Object.assign(data, { route }))
        // data => update(Object.assign({ loading: null }, data))
      )
    }
  }
}
