import Type from "union-type";

const Action = Type({
  NoOp: [],
  AddMeasurement: [Function],
  RemoveMeasurement: [Number],
  UpdateMeasurement: [Object] // {id: N, action: labeledSlider.Action}
});

export { Action };
