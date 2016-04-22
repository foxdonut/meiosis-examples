import { assoc } from "ramda";

const update = Action => (model, action) => Action.case({
  Update: (index, value) => {
    // FIXME: need lens function update here.
    model.measurements[index] = assoc("value", value, model.measurements[index]);
    return model;
  }
}, action);

export { update };
