import validate from "validate.js";

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

const receive = (model, proposal) => {
  proposal.case({
    EditEntryValue: value => model.value = value,
    Validate: () => model.errors = validate(model, validation),
    _: () => {}
  });

  return model;
};

export default receive;
