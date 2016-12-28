import { Action } from "./actions";

const rnd = (min, max) => Math.round(Math.random() * min) + (max || 0);

function initialModel(model) {
  model.label = "Measurement";
  model.value = rnd(50);
  model.max = rnd(50,100);
  model.units = rnd(10) % 2 === 0 ? "cm" : "mm";

  return model;
}

const receive = id => (model, proposal) => {
  Action.case({
    UpdateMeasurement: (proposalId, value) => {
      if (proposalId === id) {
        model.value = value;
      }
    }
  }, proposal);

  return model;
};

export const component = id => ({
  initialModel,
  receive: receive(id)
});
