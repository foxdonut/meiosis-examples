const nextUpdate = Action => (model, update, actions) => {
  if (Action.prototype.isPrototypeOf(update.action)) {
    return Action.case({
      RequestLoadList: actions.loadList,
      RequestDeleteTodo: actions.deleteTodo,
      _: () => null
    }, update.action);
  }
};

export default nextUpdate;
