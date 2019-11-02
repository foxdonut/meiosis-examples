import BaseJoi from "joi-browser"
import DateExtensions from "joi-date-extensions"
import _ from "lodash/fp"

const Joi = BaseJoi.extend(DateExtensions)

const schema = {
  dateTime: {
    date: Joi.date()
      .format("YYYY-MM-DD")
      .required(),
    hour: Joi.number()
      .integer()
      .min(0)
      .max(23)
      .required(),
    minute: Joi.number()
      .integer()
      .min(0)
      .max(59)
      .required()
  }
}

const options = {
  abortEarly: false,
  allowUnknown: true,
  language: {
    key: "",
    date: {
      base: "invalid date"
    }
  }
}

export const validateInput = input => {
  const result = Joi.validate(input, schema, options)

  let errors = {}
  const details = _.getOr([], ["error", "details"], result)

  for (let i = 0, t = details.length; i < t; i++) {
    const path = details[i].path

    if (!_.get(path, errors)) {
      errors = _.set(path, details[i].message, errors)
    }
  }
  return errors
}
