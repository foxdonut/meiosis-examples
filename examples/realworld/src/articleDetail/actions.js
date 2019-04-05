import { S } from "patchinko/explicit"

import { articlesApi, profileApi } from "../services"
import { helpers } from "../root/helpers"
import { prepend } from "../util/fp"
import { HomePage, RegisterPage, navigateTo } from "../util/router"

export const actions = ({ update }) => ({
  updateCommentField: comment => update({ comment }),

  addComment: (slug, body) => {
    if (body && body.trim().length > 0) {
      articlesApi.addComment(slug, { comment: { body } }).then(data =>
        update({
          comment: "",
          comments: S(list => prepend(data.comment, list))
        })
      )
    }
  },

  deleteComment: (slug, id) => () =>
    articlesApi
      .deleteComment(slug, id)
      .then(() => update({ comments: S(list => list.filter(comment => comment.id !== id)) })),

  deleteArticle: slug => articlesApi.unpublish(slug).then(() => update(navigateTo(HomePage))),

  followUser: (state, username) => {
    if (state.user) {
      profileApi
        .follow(username)
        .then(() => helpers.loadArticle({ slug: state.params.slug }))
        .then(update)
    } else {
      update(navigateTo(RegisterPage))
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
      update(navigateTo(RegisterPage))
    }
  },

  unfavoriteArticle: slug =>
    articlesApi
      .unfavorite(slug)
      .then(() => helpers.loadArticle({ slug }))
      .then(update)
})
