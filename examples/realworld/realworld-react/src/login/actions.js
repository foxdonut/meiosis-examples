import _ from "lodash";

export const createActions = (update, callback) => ({
  updateForm: field => evt => update(
    model => _.set(model, field, evt.target.value)
  ),

  callback: model => evt => {
    evt.preventDefault();
    callback(model);
  }
});
