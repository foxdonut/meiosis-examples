import { propose } from "meiosis";
import { Action } from "./actions";

export const nextAction = (model, proposal) => {
  proposal.case({
    Validate: () => {
      if (!model.entry.errors && !model.date.errors) {
        propose(Action.Save(model));
      }
    },
    _: () => {}
  });
};
