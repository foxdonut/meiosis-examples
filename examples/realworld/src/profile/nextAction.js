import { ProfilePage, ProfileFavoritesPage } from "../util/router"
import { helpers } from "../root/helpers"

//const fakeDelay = () => new Promise(resolve => setTimeout(resolve, 1500))

export const nextAction = update => (_model, patch) => {
  if (patch.pageId === ProfilePage || patch.pageId === ProfileFavoritesPage) {
    setTimeout(() => update({ loading: patch.pageId }), 300)

    const author = patch.pageId === ProfilePage ? patch.params.author || patch.params.username : null
    const favorited = patch.pageId === ProfileFavoritesPage ? patch.params.username : null

    Promise.all([
      helpers.loadProfile(patch.params),
      helpers.loadArticles({
        author,
        favorited
      })
      //,fakeDelay()
    ]).then(
      ([profile, articles]) => update(Object.assign({ loading: null }, profile, articles))
    )
  }
}
