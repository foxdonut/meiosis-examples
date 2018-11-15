import O from "patchinko/constant"

import { articlesApi, profileApi } from "../services"
import { helpers } from "../root/helpers"
import { prepend } from "../util/fp"
import { HomePage, RegisterPage, navigateTo } from "../util/router"

export const actions = update => ({
  updateCommentField: comment => update({ comment }),

  addComment: (slug, body) => {
    if (body && body.trim().length > 0) {
      articlesApi.addComment(slug, { comment: { body } }).then(data => update({
        comment: "", comments: O(list => prepend(data.comment, list))
      }))
    }
  },

  deleteComment: (slug, id) => () => articlesApi.deleteComment(slug, id).then(() =>
    update({ comments: O(list => list.filter(comment => comment.id !== id)) })
  ),

  deleteArticle: slug => articlesApi.unpublish(slug).then(() =>
    update(navigateTo(HomePage))),

  followUser: (model, username) => {
    if (model.user) {
      profileApi.follow(username).then(
        () => helpers.loadArticle({ slug: model.params.slug })).then(update)
    }
    else {
      update(navigateTo(RegisterPage))
    }
  },

  unfollowUser: (model, username) => profileApi.unfollow(username).then(
    () => helpers.loadArticle({ slug: model.params.slug })).then(update),

  favoriteArticle: (model, slug) => {
    if (model.user) {
      articlesApi.favorite(slug)
        .then(() => helpers.loadArticle({ slug }))
        .then(update)
    }
    else {
      update(navigateTo(RegisterPage))
    }
  },

  unfavoriteArticle: slug =>
    articlesApi.unfavorite(slug)
      .then(() => helpers.loadArticle({ slug }))
      .then(update)
})
