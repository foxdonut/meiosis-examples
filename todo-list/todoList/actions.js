import Type from "union-type";

const Action = Type({
  RequestLoadList: [],
  LoadedList: [Object],
  EditTodo: [Object],
  RequestDeleteTodo: [Number],
  DeletedTodo: [Object]
});

const actions = services => sendUpdate => ({
  requestLoadList: () => sendUpdate({ action: Action.RequestLoadList(), modelUpdate: { message: "Loading, please wait..." } }),

  loadList: () => services.loadTodos.fork(null, model => sendUpdate({ modelUpdate: model })),

  editTodo: (todo) => sendUpdate({ modelUpdate: { todo } } ),

  requestDeleteTodo: id => sendUpdate({ action: Action.RequestDeleteTodo(id), modelUpdate: { message: "Deleting, please wait..."} } ),

  deleteTodo: id => services.deleteTodo(id).fork(null, maybeTodoId => sendUpdate({ action: Action.DeletedTodo(maybeTodoId) }))
});

export { Action, actions };
