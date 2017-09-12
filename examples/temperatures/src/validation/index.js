import validate from "validate.js";

validate.extend(validate.validators.datetime, {
  parse: value => new Date(value),
  format: date => date.toISOString().substring(0, 10)
});

export const validation = {
  "entryDate.value": {
    presence: { message: "^Date is required." },
    date: { message: "^Invalid date." }
  },
  "entry.value": {
    presence: { message: "^Entry number is required." },
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
      message: "^Invalid entry number. Must be an integer greater than zero."
    }
  }
};

export const validateModel = model => validate(model, validation);
