import Type from "union-type";

const Action = Type({
  AddMeasurement: [],
  RemoveMeasurement: [String]
});

export { Action };
