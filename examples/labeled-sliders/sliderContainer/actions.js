import Type from "union-type";

const Action = Type({
  AddMeasurement: [],
  RemoveMeasurement: [String],
  UpdateMeasurement: [String, Number]
});

const actions = null;

export { Action, actions };
