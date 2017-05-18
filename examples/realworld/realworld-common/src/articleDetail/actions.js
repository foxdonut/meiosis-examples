import { assoc, compose, not, propEq } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  loadArticle: articlesApi.getSingle,

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
