import flyd from "flyd";
import { date } from "../date";
import { entry } from "../entry";

export const appActions = {
  validationErrors: flyd.stream(),
  save: flyd.stream()
};

export const appIntents = {
  save: model => () => {
    const validationErrors = {
      date: { errors: date.validateModel(model.date) },
      entry: { errors: entry.validateModel(model.entry) }
    };
    appActions.validationErrors(validationErrors);

    if (!(validationErrors.date.errors || validationErrors.entry.errors)) {
      appActions.save(true);
    }
  }
};
