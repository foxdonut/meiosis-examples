import flyd from "flyd";
import { date } from "../date";
import { entry } from "../entry";

export const actions = {
  validationErrors: flyd.stream(),
  save: flyd.stream()
};

export const intents = {
  save: model => () => {
    const validationErrors = {
      date: { errors: date.validateModel(model.date) },
      entry: { errors: entry.validateModel(model.entry) }
    };
    actions.validationErrors(validationErrors);

    if (!(validationErrors.date.errors || validationErrors.entry.errors)) {
      actions.save(true);
    }
  }
};
