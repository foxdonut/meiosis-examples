import { articlesApi, loadArticleAndComments, profileApi } from '../services';
import { prepend } from '../util/fp';
import { Route, routeTo } from '../router';

export const actions = {
  updateCommentField: (cell, comment) => cell.update({ comment }),

  addComment: (cell, slug, body) => {
    if (body && body.trim().length > 0) {
      articlesApi.addComment(slug, { comment: { body } }).then(data =>
        cell.update({
          comment: '',
          comments: list => prepend(data.comment, list)
        })
      );
    }
  },

  deleteComment: (cell, slug, id) => () =>
    articlesApi
      .deleteComment(slug, id)
      .then(() => cell.update({ comments: list => list.filter(comment => comment.id !== id) })),

  deleteArticle: (cell, slug) =>
    articlesApi.unpublish(slug).then(() => cell.update(routeTo(Route.Home))),

  followUser: (cell, username) => {
    if (cell.state.user) {
      profileApi
        .follow(username)
        .then(() => loadArticleAndComments({ slug: cell.state.route.params.slug }))
        .then(cell.update);
    } else {
      cell.update(routeTo(Route.Login));
    }
  },

  unfollowUser: (cell, username) =>
    profileApi
      .unfollow(username)
      .then(() => loadArticleAndComments({ slug: cell.state.route.params.slug }))
      .then(cell.update)
};
