const nextAction = Action => (model, proposal, actions) => {
  return Action.case({
    RequestDeleteTodo: actions.deleteTodo,
    _: () => null
  }, proposal);
};

export default nextAction;
