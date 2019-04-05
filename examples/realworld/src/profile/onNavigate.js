import { helpers } from "../root/helpers"

const loadProfileAndArticles = ({ state, update, navigation, username, author, favorited }) =>
  Promise.all([
    helpers.loadProfile({ username }),
    helpers.loadArticles({
      limit: state.articlesFilter.limit,
      offset: state.articlesFilter.offset,
      author,
      favorited
    })
  ]).then(([profile, articles]) => update(Object.assign({}, profile, articles, navigation)))

export const onNavigate = {
  Profile: ({ username }) => ({ state, update, navigation }) =>
    loadProfileAndArticles({ state, update, navigation, username, author: username }), // or params.author?
  ProfileFavorites: ({ username }) => ({ state, update, navigation }) =>
    loadProfileAndArticles({ state, update, navigation, username, favorited: username })
}
