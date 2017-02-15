import validate from "validate.js";
import { dateActions } from "./actions";
import { mergeIntoOne } from "../util";

export const initialModel = () => ({
  value: ""
});

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

const editDateValue = dateActions.editDateValue.map(value => model => {
  model.value = value;
  return model;
});

//  Validate: () => model.errors = validate(model, validation)

export const modelChanges = mergeIntoOne([
  editDateValue
]);