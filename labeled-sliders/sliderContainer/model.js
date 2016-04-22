import { append, assoc } from "ramda";

const initialModel = {
  measurements: [],
  nextId: 0
};

const updateMeasurement = update => measurement =>
  update.id === measurement.id ? update : measurement;

const rnd = (min, max) => Math.round(Math.random() * min) + (max || 0);

const update = Action => (model, action) => Action.case({
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
    assoc("measurements", model.measurements.filter(m => m.id !== id), model),

  UpdateMeasurement: measurement =>
    assoc("measurements", model.measurements.map(updateMeasurement(measurement)), model)
}, action);

export { initialModel, update };
