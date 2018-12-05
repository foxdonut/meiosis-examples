import BaseJoi from "joi-browser";
import DateExtensions from "joi-date-extensions";
import _ from "lodash";

const Joi = BaseJoi.extend(DateExtensions);

const schema = {
  "entry:date:from": {
    value: Joi.date().format("YYYY-MM-DD").required()
  },
  "entry:date:to": {
    value: Joi.date().format("YYYY-MM-DD").required()
  },
  "entry:number": {
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
