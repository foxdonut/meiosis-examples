import { articlesApi, loadArticleAndComments, profileApi } from "../services"
import { prepend } from "../util/fp"
import { Route, routeTo } from "../router"
import { selectors } from "../state"

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

  deleteArticle: slug => articlesApi.unpublish(slug).then(() => update(routeTo(Route.Home))),

  followUser: (state, username) => {
    if (state.user) {
      profileApi
        .follow(username)
        .then(() => loadArticleAndComments({ slug: selectors.params(state).slug }))
        .then(update)
    } else {
      update(routeTo(Route.Login))
    }
  },

  unfollowUser: (state, username) =>
    profileApi
      .unfollow(username)
      .then(() => loadArticleAndComments({ slug: selectors.params(state).slug }))
      .then(update)
})
