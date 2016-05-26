const nextUpdate = Action => (model, update, actions) => {
  if (Action.prototype.isPrototypeOf(update.action)) {
    Action.case({
      RequestSaveTodo: actions.saveTodo,
      SavedTodo: actions.clearForm,
      _: () => null
    }, update.action);
  }
};

export default nextUpdate;
