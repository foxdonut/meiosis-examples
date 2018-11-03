import { HomePage, FeedPage } from "../util/router"
import { helpers } from "../root/helpers"

const fakeDelay = () => new Promise(resolve => setTimeout(resolve, 1500))

export const nextAction = update => (_model, patch) => {
  if (patch.pageId === HomePage) {
    setTimeout(() => update({ loading: HomePage }), 300)

    /*
    helpers.loadArticles(patch.params).then(
      data => update(Object.assign({ loading: null }, data))
    )
    */
    fakeDelay().then(() => helpers.loadArticles(patch.params).then(
      data => update(Object.assign({ loading: null }, data)))
    )
  }
  else if (patch.pageId === FeedPage) {
    helpers.loadFeed(patch.params).then(update)
  }
}
