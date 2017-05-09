import { assoc } from "ramda";

export const createActions = (update, callback) => ({
  updateForm: field => evt => update(
    assoc(field, evt.target.value)
  ),

  callback: model => evt => {
    evt.preventDefault();
    callback(model);
  }
});
