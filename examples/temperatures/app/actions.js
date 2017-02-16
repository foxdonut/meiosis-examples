import flyd from "flyd";
import { date } from "../date";
import { entry } from "../entry";

export const appActions = {
  validationErrors: flyd.stream(),
  save: flyd.stream()
};

export const appIntents = {
  save: model => () => {
    const dateErrors = date.validateModel(model.date);
    const entryErrors = entry.validateModel(model.entry);

    if (dateErrors || entryErrors) {
      appActions.validationErrors({
        date: dateErrors,
        entry: entryErrors
      });
    }
    else {
      appActions.save(true);
    }
  }
};
