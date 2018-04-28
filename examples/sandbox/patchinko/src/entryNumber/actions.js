export const createActions = update => ({
  editEntryValue: evt => update({ "value": evt.target.value })
});
