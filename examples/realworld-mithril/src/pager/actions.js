import { assoc } from "ramda";

export const createActions = callback => ({
  page: (model, pageNumber) => evt => {
    evt.preventDefault();
    callback(assoc("offset", (pageNumber - 1) * model.limit, model));
  }
});
