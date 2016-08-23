import objectPath from "object-path";
import validate from "validate.js";

import Action from "./actions";

validate.extend(validate.validators.datetime, {
  parse: value => new Date(value),
  format: date => date.toISOString().substring(0, 10)
});

const validation = {
  "store.date.value": {
    presence: { message: "^Date is required." },
    date: { message: "^Invalid date." }
  }
};

const receive = FormAction => (model, proposal) => {
  Action.case({
    EditDateValue: value => model.store.date.value = value,
    _: () => {}
  }, proposal);

  FormAction.case({
    Validate: () => {
      const key = "store.date.value";
      const errors = validate(model, validation);

      if (errors) {
        objectPath.set(model, ["store", "errors", key], errors[key]);
      }
      else {
        objectPath.del(model, ["store", "errors", key]);
      }
    },
    _: () => {}
  }, proposal);

  return model;
};

export default receive;
