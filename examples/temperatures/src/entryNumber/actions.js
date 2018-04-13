import _ from "lodash";

export const createActions = update => ({
  editEntryValue: evt => update({ fn: model => _.set(model, "value", evt.target.value) })
});
