import Joi from "joi";
import _ from "lodash";

const schema = Joi.object().required().keys({
  entryDate: Joi.object().required().keys({
    value: Joi.date().required()
  }),
  entry: Joi.object().required().keys({
    value: Joi.number().integer().min(0)
  })
});

const options = {
  abortEarly: false,
  allowUnknown: true
};

export const validateModel = model => {
  const result = Joi.validate(model, schema, options);
  return _.get(result, ["error", "details"], []);
};
