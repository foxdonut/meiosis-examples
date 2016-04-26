const chain = Action => (action, actions) => Action.case({
  RequestSaveTodo: actions.saveTodo,
  SavedTodo: actions.clearForm,
  _: () => null
}, action);

export default chain;
