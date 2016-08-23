import objectPath from "object-path";
import validate from "validate.js";

import Action from "./actions";

const validation = {
  "store.entry.value": {
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
    EditEntryValue: value => model.store.entry.value = value,
    _: () => {}
  }, proposal);

  FormAction.case({
    Validate: () => {
      const key = "store.entry.value";
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
