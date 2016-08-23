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

const receive = MainAction => (model, proposal) => {
  Action.case({
    EditDateValue: value => model.store.date.value = value,
    _: () => {}
  }, proposal);

  MainAction.case({
    Validate: () => model.store.errors = validate(model, validation),
    _: () => {}
  }, proposal);

  return model;
};

export default receive;
