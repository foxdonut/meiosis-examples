import { assoc } from "ramda";

export const setSelectedOperation = selectedOperation =>
  assoc("selectedOperation", selectedOperation);

export const createActions = update => ({
  changeSelectedOperation: evt => update(setSelectedOperation(evt.target.value))
});
