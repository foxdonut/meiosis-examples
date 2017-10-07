import Joi from "joi";
import _ from "lodash";

const schema = Joi.object().required().keys({
  entryDate: Joi.object().required().keys({
    from: Joi.object().required().keys({
      value: Joi.date().required().options({
        language: { key: "Date ", date: { base: "must be a valid date" } }
      })
    }),
    to: Joi.object().required().keys({
      value: Joi.date().required().options({
        language: { key: "Date ", date: { base: "must be a valid date" } }
      })
    })
  }),
  entryNumber: Joi.object().required().keys({
    value: Joi.number().required().integer().min(0).options({
      language: { key: "Entry number " }
    })
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
