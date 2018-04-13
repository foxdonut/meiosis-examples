import _ from "lodash";

export const createActions = update => ({
  editDateValue: evt => update({ fn: model => _.set(model, "value", evt.target.value) })
});
