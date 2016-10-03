import Action from "./actions";

const nextAction = (model, proposal, propose) => {
  proposal.case({
    Validate: () => {
      if (!model.store.entry.errors && !model.store.date.errors) {
        propose(Action.Save(model));
      }
    },
    _: () => {}
  });
};

export default nextAction;
