import { append, assoc, merge } from "ramda";
import { Action } from "./actions";

const rnd = (min, max) => Math.round(Math.random() * min) + (max || 0);

const transform = (model, proposal) => Action.case({
  AddMeasurement: () =>
    assoc("nextId",
      model.nextId + 1,
      assoc("measurements",
        append({
          id: model.nextId,
          label: "Measurement",
          value: rnd(50),
          max: rnd(50,100),
          units: rnd(10) % 2 === 0 ? "cm" : "mm"
        }, model.measurements),
        model
      )
    ),

  RemoveMeasurement: id =>
    assoc("measurements", model.measurements.filter(m => m.id !== id), model)
}, proposal);

const receive = (model, proposal) => {
  if (parseInt(proposal.index, 10) >= 0) {
    model.measurements[proposal.index] = assoc("value", proposal.value, model.measurements[proposal.index]);
  }
  else {
    model = merge(model, transform(model, proposal));
  }
  return model;
};

export default receive;
