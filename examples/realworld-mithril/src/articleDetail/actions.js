import { merge } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  loadArticle: slug => articlesApi.getSingle(slug).then(
    article => update(model => merge(model, article))
  ),

  loadComments: slug => articlesApi.getComments(slug).then(
    comments => update(model => merge(model, comments))
  )
});
