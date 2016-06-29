const nextAction = Action => (model, proposal, actions) => {
  if (Action.prototype.isPrototypeOf(proposal.action)) {
    Action.case({
      RequestSaveTodo: actions.saveTodo,
      SavedTodo: actions.clearForm,
      _: () => null
    }, proposal.action);
  }
};

export default nextAction;
