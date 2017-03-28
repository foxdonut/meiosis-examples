export const createActions = update => ({
  editDateValue: evt => update(model => model.set("value", evt.target.value))
});
