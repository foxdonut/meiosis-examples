const nextAction = Action => (model, proposal, actions) => {
  if (Action.prototype.isPrototypeOf(proposal.action)) {
    return Action.case({
      RequestLoadList: actions.loadList,
      RequestDeleteTodo: actions.deleteTodo,
      _: () => null
    }, proposal.action);
  }
};

export default nextAction;
