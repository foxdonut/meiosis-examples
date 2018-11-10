import { HomePage } from "../util/router"
import { helpers } from "../root/helpers"
import { pick } from "../util/fp"

export const nextAction = update => (model, patch) => {
  if (patch.pageId === HomePage) {
    setTimeout(() => update({ loading: HomePage }), 300)

    if (model.feed) {
      helpers.loadFeed(
        Object.assign({}, pick(["limit", "offset"], model.articlesFilter), patch.params)
      ).then(update)
    }
    else {
      helpers.loadArticles(
        Object.assign({}, model.articlesFilter, patch.params)
      ).then(
        data => update(Object.assign({ loading: null }, data))
      )
    }
  }
}
