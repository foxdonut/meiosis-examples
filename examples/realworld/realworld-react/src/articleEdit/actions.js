import _ from "lodash";
import validate from "validate.js";

import { articlesApi } from "../services";

const validationSpec = {
  body: { presence: true },
  description: { presence: true },
  title: { presence: true }
};

export const createActions = update => ({
  updateForm: field => evt => update(
    model => _.set(model, field, evt.target.value)
  ),

  publish: article => evt => {
    evt.preventDefault();
    const validationErrors = validate(article, validationSpec);
    update(model => _.set(model, "validationErrors", validationErrors));
    if (!validationErrors) {
      articlesApi.publish({ article }).then(() => null);//m.route.set("/"));
    }
  }
});
