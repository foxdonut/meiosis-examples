import { ProfilePage } from "../util/router"
import { helpers } from "../root/helpers"
import { pick } from "../util/fp"

export const nextAction = update => (model, patch) => {
  if (patch.pageId === ProfilePage) {
    Promise.all([
      helpers.loadProfile(patch.params),
      //helpers.loadArticles(model, { favorited: patch.params.username })
      helpers.loadArticles(model, pick(["author", "favorited"], patch.params))
    ]).then(
      ([profile, articles]) => update(Object.assign({}, profile, articles))
    )
  }
}
