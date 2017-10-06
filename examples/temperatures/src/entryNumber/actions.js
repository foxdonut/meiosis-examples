import _ from "lodash";

export const createActions = update => ({
  editEntryValue: evt => update(model => _.set(model, "value", evt.target.value))
});
