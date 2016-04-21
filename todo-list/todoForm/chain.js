const chain = Action => (_model, action, actions) => Action.case({
  RequestSaveTodo: actions.saveTodo,
  SavedTodo: actions.clearForm,
  _: () => null
}, action);

export default chain;
