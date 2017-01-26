import uuid from "uuid";
import { Action } from "./actions";

const rnd = (min, max) => Math.round(Math.random() * min) + (max || 0);

function initialModel(id) {
  id = id || uuid.v1();

  return {
    id,
    label: "Measurement",
    value: rnd(50),
    max: rnd(50,100),
    units: rnd(10) % 2 === 0 ? "cm" : "mm"
  };
}

const receive = (model, proposal) => {
  Action.case({
    UpdateMeasurement: (proposalId, value) => {
      if (proposalId === model.id) {
        model.value = value;
      }
    }
  }, proposal);

  return model;
};

export const component = {
  initialModel,
  receive
};
