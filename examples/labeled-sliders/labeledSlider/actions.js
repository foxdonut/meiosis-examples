import Type from "union-type";

const Action = Type({
  UpdateMeasurement: [String, Number]
});

export { Action };
