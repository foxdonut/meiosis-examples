import { HomePage } from "../util/router"
import { helpers } from "../root/helpers"

const fakeDelay = () => new Promise(resolve => setTimeout(resolve, 1500))

export const nextAction = update => (model, patch) => {
  if (patch.pageId === HomePage) {
    setTimeout(() => update({ loading: HomePage }), 300)

    /*
    helpers.loadArticles(patch.params).then(
      data => update(Object.assign({ loading: null }, data))
    )
    */
    if (patch.feed) {
      helpers.loadFeed(patch.params).then(update)
    }
    else {
      fakeDelay().then(() => helpers.loadArticles(
        Object.assign({}, model.articlesFilter, patch.params)
      ).then(
        data => update(Object.assign({ loading: null }, data)))
      )
    }
  }
}
