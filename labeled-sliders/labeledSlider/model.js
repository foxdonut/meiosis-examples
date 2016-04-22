import { assoc } from "ramda";

const update = Action => (model, action) => Action.case({
  Update: value => assoc("value", value, model)
}, action);

export { update };
