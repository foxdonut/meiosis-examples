import Type from "union-type";

export const Action = Type({
  Increase: [Number],
  Decrease: [Number],
  ChangeUnits: []
});
