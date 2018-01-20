import Joi from "joi";
import _ from "lodash";

const schema = {
  entryDate: {
    from: {
      value: Joi.date().required()
    },
    to: {
      value: Joi.date().required()
    }
  },
  entryNumber: {
    value: Joi.number().integer().min(0).required()
  }
};

const options = {
  abortEarly: false,
  allowUnknown: true,
  language: {
    key: "",
    date: {
      base: "invalid date"
    }
  }
};

export const validateModel = model => {
  const result = Joi.validate(model, schema, options);

  const errors = {};
  const details = _.get(result, ["error", "details"], []);

  for (let i = 0, t = details.length; i < t; i++) {
    const path = details[i].path;

    if (!_.get(errors, path)) {
      _.set(errors, path, details[i].message);
    }
  }
  return errors;
};
