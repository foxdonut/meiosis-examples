import { assoc, compose, flip, merge, not, propEq } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  // .then(data => update(model => merge(model)(data)))
  // .then(data => update(model => flip(merge)(data)(model)
  // .then(data => update(flip(merge)(data)))
  // .then(data => compose(update, flip(merge))(data))
  // .then(compose(update, flip(merge)))
  loadArticle: slug => articlesApi.getSingle(slug).then(compose(update, flip(merge))),

  loadComments: slug => articlesApi.getComments(slug).then(compose(update, flip(merge))),

  updateCommentField: evt => update(assoc("comment", evt.target.value)),

  addComment: (slug, body) => evt => {
    evt.preventDefault();
    articlesApi.addComment(slug, { comment: { body } }).then(data => update(model => {
      model.comment = "";
      model.comments.unshift(data.comment);
      return model;
    }));
  },

  deleteComment: (slug, id) => () => articlesApi.deleteComment(slug, id).then(() =>
    update(model => assoc("comments", model.comments.filter(compose(not, propEq("id", id))), model))
  )
});
