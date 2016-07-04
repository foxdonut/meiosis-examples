const nextAction = Action => (model, proposal, actions) => {
  Action.case({
    RequestSaveTodo: actions.saveTodo,
    SavedTodo: actions.clearForm,
    _: () => null
  }, proposal);
};

export default nextAction;
