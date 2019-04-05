import { helpers } from "../root/helpers"
import { pick } from "../util/fp"

export const onNavigate = {
  Home: () => ({ state, update, navigation }) => {
    // setTimeout(() => update({ loading: HomePage }), 300)

    if (navigation.route.feed) {
      helpers
        .loadFeed(
          Object.assign(
            {},
            pick(["limit", "offset"], state.articlesFilter),
            navigation.route.params
          )
        )
        .then(data => update(Object.assign(data, navigation)))
    } else {
      helpers
        .loadArticles(
          // FIXME
          Object.assign({}, state.articlesFilter, navigation.query, {
            tag: navigation.query && navigation.query.tag
          })
        )
        .then(
          data => update(Object.assign(data, navigation))
          // data => update(Object.assign({ loading: null }, data))
        )
    }
  }
}
