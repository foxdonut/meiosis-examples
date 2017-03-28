export const createActions = update => ({
  editEntryValue: evt => update(model => model.set("value", evt.target.value))
});
