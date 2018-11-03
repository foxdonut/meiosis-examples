import { ProfilePage } from "../util/router"
import { helpers } from "../root/helpers"

//const fakeDelay = () => new Promise(resolve => setTimeout(resolve, 1500))

export const nextAction = update => (_model, patch) => {
  if (patch.pageId === ProfilePage) {
    setTimeout(() => update({ loading: ProfilePage }), 300)

    const author = patch.params.author ||
      (!author && !patch.params.favorited) ? patch.params.username : null

    Promise.all([
      helpers.loadProfile(patch.params),
      helpers.loadArticles({
        author,
        favorited: patch.params.favorited
      })
      //,fakeDelay()
    ]).then(
      ([profile, articles]) => update(Object.assign({ loading: null }, profile, articles))
    )
  }
}
