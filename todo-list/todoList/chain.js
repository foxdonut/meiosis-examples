const chain = Action => (action, actions) => Action.case({
  RequestLoadList: actions.loadList,
  RequestDeleteTodo: actions.deleteTodo,
  _: () => null
}, action);

export default chain;
