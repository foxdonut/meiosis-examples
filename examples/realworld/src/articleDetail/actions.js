import { articlesApi, loadArticle, profileApi } from "../services"
import { prepend } from "../util/fp"
import { Route, navigateTo } from "../routes"

export const Actions = update => ({
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

  followUser: (state, username, routing) => {
    if (state.user) {
      profileApi
        .follow(username)
        .then(() => loadArticle({ slug: routing.localSegment.params.slug }))
        .then(update)
    } else {
      update(navigateTo(Route.Login()))
    }
  },

  unfollowUser: (state, username, routing) =>
    profileApi
      .unfollow(username)
      .then(() => loadArticle({ slug: routing.localSegment.params.slug }))
      .then(update)
})
