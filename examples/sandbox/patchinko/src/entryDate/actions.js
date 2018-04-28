export const createActions = update => ({
  editDateValue: evt => update({ "value": evt.target.value })
});
