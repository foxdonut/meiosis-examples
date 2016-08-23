import Type from "union-type";

const Action = Type({
  Validate: [Object],
  Save: [Object]
});

export default Action;
