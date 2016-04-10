import Type from "union-type";

const Action = Type({
  NoOp: [],
  Update: [Number]
});

export { Action };
