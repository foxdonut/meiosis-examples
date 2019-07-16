import { articlesApi, profileApi } from "../services"
import { helpers } from "../root/helpers"
import { prepend } from "../util/fp"
import { Route, navigateTo } from "../routes"

export const Actions = ({ update }) => ({
  updateCommentField: comment => update({ comment }),

  addComment: (slug, body) => {
    if (body && body.trim().length > 0) {
      articlesApi.addComment(slug, { comment: { body } }).then(data =>
        update({
          comment: "",
          comments: list => prepend(data.comment, list)
        })
      )
    }
  },

  deleteComment: (slug, id) => () =>
    articlesApi
      .deleteComment(slug, id)
      .then(() => update({ comments: list => list.filter(comment => comment.id !== id) })),

  deleteArticle: slug => articlesApi.unpublish(slug).then(() => update(navigateTo(Route.Home()))),

  followUser: (state, username) => {
    if (state.user) {
      profileApi
        .follow(username)
        .then(() => helpers.loadArticle({ slug: state.params.slug }))
        .then(update)
    } else {
      update(navigateTo(Route.Register()))
    }
  },

  unfollowUser: (state, username) =>
    profileApi
      .unfollow(username)
      .then(() => helpers.loadArticle({ slug: state.params.slug }))
      .then(update),

  favoriteArticle: (state, slug) => {
    if (state.user) {
      articlesApi
        .favorite(slug)
        .then(() => helpers.loadArticle({ slug }))
        .then(update)
    } else {
      update(navigateTo(Route.Register()))
    }
  },

  unfavoriteArticle: slug =>
    articlesApi
      .unfavorite(slug)
      .then(() => helpers.loadArticle({ slug }))
      .then(update)
})
