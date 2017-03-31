import validate from "validate.js";

export const model = () => ({
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

export const validateModel = model => validate(model, validation);
