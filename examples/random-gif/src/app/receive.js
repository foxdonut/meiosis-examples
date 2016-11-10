import * as C from "../random-gif";

export function receive(model, proposal) {
  if (proposal.type === C.GIF_NEW_SUCCESS) {
    const increment = model.counter.value >= 10 && model.button.active ? 2 : 1;
    model.counter.value = model.counter.value + increment;
  }
  return model;
}