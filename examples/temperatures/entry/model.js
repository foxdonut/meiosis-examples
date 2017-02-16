import validate from "validate.js";
import { entryActions } from "./actions";
import { mergeIntoOne } from "../util";

export const initialModel = () => ({
  value: ""
});

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

export const receive = (model, proposal) => {
  proposal.case({
    EditEntryValue: value => model.value = value,
    Validate: () => model.errors = validate(model, validation)
  });

  return model;
};

const editEntryValue = entryActions.editEntryValue.map(value => model => {
  model.value = value;
  return model;
});

export const validateModel = model => validate(model, validation);

export const modelChanges = mergeIntoOne([
  editEntryValue
]);