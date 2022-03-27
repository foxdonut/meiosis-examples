import BaseJoi from 'joi-browser';
import DateExtensions from 'joi-date-extensions';
import _ from 'lodash';

const Joi = BaseJoi.extend(DateExtensions);

const schema = {
  dateTime: {
    date: Joi.date().format('YYYY-MM-DD').required(),
    hour: Joi.number().integer().min(0).max(23).required(),
    minute: Joi.number().integer().min(0).max(59).required()
  }
};

const options = {
  abortEarly: false,
  allowUnknown: true,
  language: {
    key: '',
    date: {
      base: 'invalid date'
    }
  }
};

export const validateInput = input => {
  const result = Joi.validate(input, schema, options);

  const errors = {};
  const details = _.get(result, ['error', 'details'], []);

  for (let i = 0, t = details.length; i < t; i++) {
    const path = details[i].path;

    if (!_.get(errors, path)) {
      _.set(errors, path, details[i].message);
    }
  }
  return errors;
};
