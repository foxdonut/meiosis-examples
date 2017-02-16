import flyd from "flyd";

export const entryActions = {
  editEntryValue: flyd.stream()
};

export const entryIntents = {
  editEntryValue: evt => entryActions.editEntryValue(evt.target.value)
};
