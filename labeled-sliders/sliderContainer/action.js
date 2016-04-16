import Type from "union-type";

const Action = Type({
  NoOp: [],
  AddMeasurement: [],
  RemoveMeasurement: [Number],
  UpdateMeasurement: [Object]
});

export { Action };
