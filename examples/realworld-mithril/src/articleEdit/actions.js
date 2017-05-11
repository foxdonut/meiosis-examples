import { assoc } from "ramda";

import { articlesApi } from "../services";

export const createActions = update => ({
  updateForm: field => evt => update(
    assoc(field, evt.target.value)
  ),

  publish: article => evt => {
    evt.preventDefault();
    articlesApi.publish({ article });
  }
});
