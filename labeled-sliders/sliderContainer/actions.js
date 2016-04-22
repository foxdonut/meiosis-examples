import Type from "union-type";

const Action = Type({
  AddMeasurement: [],
  RemoveMeasurement: [Number],
  UpdateMeasurement: [Object]
});

export { Action };
