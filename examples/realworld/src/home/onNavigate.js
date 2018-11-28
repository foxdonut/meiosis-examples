import { helpers } from "../root/helpers"
import { pick } from "../util/fp"

export const onNavigate = {
  Home: () => ({ model, update, navigation }) => {
    // setTimeout(() => update({ loading: HomePage }), 300)

    if (navigation.route.feed) {
      helpers.loadFeed(
        Object.assign({}, pick(["limit", "offset"], model.articlesFilter), navigation.route.params)
      ).then(data => update(Object.assign(data, navigation)))
    }
    else {
      helpers.loadArticles(
        Object.assign({}, model.articlesFilter, navigation.query, { tag: navigation.query.tag }) // FIXME
      ).then(
        data => update(Object.assign(data, navigation))
        // data => update(Object.assign({ loading: null }, data))
      )
    }
  }
}
