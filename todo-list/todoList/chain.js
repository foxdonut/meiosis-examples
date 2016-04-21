const chain = Action => (_model, action, actions) => Action.case({
  RequestLoadList: actions.loadList,
  RequestDeleteTodo: actions.deleteTodo,
  _: () => null
}, action);

export default chain;
