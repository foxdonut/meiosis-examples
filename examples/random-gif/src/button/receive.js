import { BUTTON_TOGGLE } from "./constants";

export function receive(model, proposal) {
  if (proposal.type === BUTTON_TOGGLE) {
    model.active = !model.active;
  }
  return model;
}
