import validate from "validate.js";

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

export const validateModel = model => validate(model, validation);
