import flyd from "flyd";

export const dateActions = {
  editDateValue: flyd.stream()
};

export const dateIntents = {
  editDateValue: evt => dateActions.editDateValue(evt.target.value)
};
