import { Action } from "./actions";

const nextAction = (model, proposal, actions) => {
  Action.case({
    ValidateTodo: todo => {
      if (Object.keys(model.store.validationErrors).length === 0) {
        actions.saveTodo(todo);
      }
    },
    _: () => {}
  }, proposal);
};

export default nextAction;
