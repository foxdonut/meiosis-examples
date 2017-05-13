import m from "mithril";
import { assoc } from "ramda";
import validate from "validate.js";

import { articlesApi } from "../services";

const validationSpec = {
  body: { presence: true },
  description: { presence: true },
  title: { presence: true }
};

export const createActions = update => ({
  updateForm: field => evt => update(
    assoc(field, evt.target.value)
  ),

  publish: article => evt => {
    evt.preventDefault();
    const validationErrors = validate(article, validationSpec);
    update(model => assoc("validationErrors", validationErrors, model));
    if (!validationErrors) {
      articlesApi.publish({ article }).then(() => m.route.set("/"));
    }
  }
});
