import { HomePage, FeedPage } from "../util/router"
import { helpers } from "../root/helpers"

export const nextAction = update => (_model, patch) => {
  if (patch.pageId === HomePage) {
    helpers.loadArticles(patch.params).then(update)
  }
  else if (patch.pageId === FeedPage) {
    helpers.loadFeed(patch.params).then(update)
  }
}
