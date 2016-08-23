import validate from "validate.js";

import Action from "./actions";

const validation = {
  value: {
    presence: { message: "^Entry number is required." },
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
      message: "^Invalid entry number. Must be an integer greater than zero."
    }
  }
};

const receive = FormAction => (model, proposal) => {
  Action.case({
    EditEntryValue: value => model.value = value,
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
