import Action from "./actions";

const nextAction = (model, proposal, propose) => {
  Action.case({
    Validate: () => {
      if (!model.store.entry.errors && !model.store.date.errors) {
        propose(Action.Save(model));
      }
    },
    _: () => {}
  }, proposal);
};

export default nextAction;
