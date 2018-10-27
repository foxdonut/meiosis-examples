import { ProfilePage } from "../util/router"
import { helpers } from "../root/helpers"

export const nextAction = update => (_model, patch) => {
  if (patch.pageId === ProfilePage) {
    const author = patch.params.author ||
      (!author && !patch.params.favorited) ? patch.params.username : null

    Promise.all([
      helpers.loadProfile(patch.params),
      helpers.loadArticles({
        author,
        favorited: patch.params.favorited
      })
    ]).then(
      ([profile, articles]) => update(Object.assign({}, profile, articles))
    )
  }
}
