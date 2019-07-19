import { SUB } from "mergerino"

import { articlesApi, profileApi } from "../services"
import { helpers } from "../root/helpers"
import { prepend } from "../util/fp"
import { Route, navigateTo } from "../routes"

export const Actions = update => ({
  updateCommentField: comment => update({ comment }),

  addComment: (slug, body) => {
    if (body && body.trim().length > 0) {
      articlesApi.addComment(slug, { comment: { body } }).then(data =>
        update({
          comment: "",
          comments: SUB(list => prepend(data.comment, list))
        })
      )
    }
  },

  deleteComment: (slug, id) => () =>
    articlesApi
      .deleteComment(slug, id)
      .then(() => update({ comments: SUB(list => list.filter(comment => comment.id !== id)) })),

  deleteArticle: slug => articlesApi.unpublish(slug).then(() => update(navigateTo(Route.Home()))),

  followUser: (state, username, routing) => {
    if (state.user) {
      profileApi
        .follow(username)
        .then(() => helpers.loadArticle({ slug: routing.localSegment.params.slug }))
        .then(update)
    } else {
      update(navigateTo(Route.Login()))
    }
  },

  unfollowUser: (state, username, routing) =>
    profileApi
      .unfollow(username)
      .then(() => helpers.loadArticle({ slug: routing.localSegment.params.slug }))
      .then(update)
})
