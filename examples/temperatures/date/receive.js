import validate from "validate.js";

import Action from "./actions";

validate.extend(validate.validators.datetime, {
  parse: value => new Date(value),
  format: date => date.toISOString().substring(0, 10)
});

const validation = {
  value: {
    presence: { message: "^Date is required." },
    date: { message: "^Invalid date." }
  }
};

const receive = FormAction => (model, proposal) => {
  Action.case({
    EditDateValue: value => model.value = value,
    _: () => {}
  }, proposal);

  FormAction.case({
    Validate: () => {
      model.errors = validate(model, validation);
    },
    _: () => {}
  }, proposal);

  return model;
};

export default receive;
