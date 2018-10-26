import O from "patchinko/constant"

import { articlesApi } from "../services"
import { services } from "../root/services"
import { prepend } from "../util/fp"
import { HomePage, LoginPage, navigateTo } from "../util/router"

export const actions = update => ({
  updateCommentField: comment => update({ comment }),

  addComment: (slug, body) => {
    articlesApi.addComment(slug, { comment: { body } }).then(data => update({
      comment: "", comments: O(list => prepend(data.comment, list))
    }))
  },

  deleteComment: (slug, id) => () => articlesApi.deleteComment(slug, id).then(() =>
    update({ comments: O(list => list.filter(comment => comment.id !== id)) })
  ),

  deleteArticle: slug => articlesApi.unpublish(slug).then(() =>
    update(navigateTo(HomePage))),

  favoriteArticle: (model, slug) => {
    if (model.user) {
      articlesApi.favorite(slug)
        .then(() => services.loadArticle({ slug }))
        .then(update)
    }
    else {
      return navigateTo(LoginPage)
    }
  }
})
