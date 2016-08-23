import Action from "./actions";

const nextAction = (model, proposal, propose) => {
  Action.case({
    Validate: () => {
      if (!model.store.errors || Object.keys(model.store.errors).length === 0) {
        propose(Action.Save(model));
      }
    },
    _: () => {}
  }, proposal);
};

export default nextAction;
