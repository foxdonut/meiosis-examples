import { append, assoc, merge } from "ramda";
import { Action } from "./actions";

const rnd = (min, max) => Math.round(Math.random() * min) + (max || 0);

const transform = (model, action) => Action.case({
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
}, action);

const receiveUpdate = (model, update) => {
  if (parseInt(update.index, 10) >= 0) {
    model.measurements[update.index] = assoc("value", update.value, model.measurements[update.index]);
  }
  else {
    model = merge(model, transform(model, update));
  }
  return model;
};

export default receiveUpdate;
