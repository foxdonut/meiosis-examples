import Type from "union-type";

const Action = Type({
  Increase: [Number],
  Decrease: [Number],
  ChangeUnits: []
});

export default Action;
