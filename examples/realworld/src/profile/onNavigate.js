import { helpers } from "../root/helpers"

const loadProfileAndArticles = ({ model, update, navigation, username, author, favorited }) =>
  Promise.all([
    helpers.loadProfile({ username }),
    helpers.loadArticles({
      limit: model.articlesFilter.limit,
      offset: model.articlesFilter.offset,
      author,
      favorited
    })
  ]).then(
    ([profile, articles]) => update(Object.assign({}, profile, articles, navigation))
  )

export const onNavigate = {
  Profile: ({ username }) => ({ model, update, navigation }) =>
    loadProfileAndArticles({ model, update, navigation, username, author: username }), // or params.author?
  ProfileFavorites: ({ username }) => ({ model, update, navigation }) =>
    loadProfileAndArticles({ model, update, navigation, username, favorited: username })
}
