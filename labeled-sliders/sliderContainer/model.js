import { append, assoc } from "ramda";

const initialModel = {
  measurements: [],
  nextId: 0
};

const rnd = (min, max) => Math.round(Math.random() * min) + (max || 0);

const transform = Action => (model, action) => Action.case({
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

export { initialModel, transform };
