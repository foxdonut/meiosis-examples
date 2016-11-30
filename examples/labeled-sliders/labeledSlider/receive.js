import { Action } from "./actions";

export const receive = id => (model, proposal) => {
  Action.case({
    UpdateMeasurement: (proposalId, value) => {
      if (proposalId === id) {
        model.value = value;
      }
    }
  }, proposal);

  return model;
};
