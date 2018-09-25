import validate from "validate.js";

let validationSpec = {
  description: {
    presence: true,
    length: {
      minimum: 2,
      maximum: 50
    }
  },
  priority: {
    presence: true,
    numericality: {
      onlyInteger: true,
      greaterThan: 0,
      lessThanOrEqualTo: 10
    }
  }
};

export function validateModel(model) {
  return validate(model, validationSpec) || {};
}
