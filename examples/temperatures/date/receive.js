import validate from "validate.js";

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

const receive = (model, proposal) => {
  proposal.case({
    EditDateValue: value => model.value = value,
    Validate: () => model.errors = validate(model, validation),
    _: () => {}
  });

  return model;
};

export default receive;
