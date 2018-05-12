import _ from "lodash";

import { articlesApi } from "../services";

export const createActions = update => ({
  updateCommentField: evt => update(model => _.set(model, "comment", evt.target.value)),

  addComment: (slug, body) => evt => {
    evt.preventDefault();
    articlesApi.addComment(slug, { comment: { body } }).then(data => update(model => {
      model.comment = "";
      model.comments.unshift(data.comment);
      return model;
    }));
  },

  deleteComment: (slug, id) => () => articlesApi.deleteComment(slug, id).then(() =>
    update(model => {
      _.remove(model.comments, comment => comment.id === id);
      return model;
    })
  )
});
