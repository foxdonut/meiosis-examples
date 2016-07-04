import Type from "union-type";

const Action = Type({
  RequestLoadList: [],
  LoadedList: [Object],
  EditTodo: [Object],
  RequestDeleteTodo: [Number],
  DeletedTodo: [Object]
});

const actions = services => propose => ({
  requestLoadList: () => {
    propose(Action.RequestLoadList());
    services.loadTodos.fork(null, model => propose(Action.LoadedList(model)));
  },

  editTodo: (todo) => propose({ modelUpdate: { todo } } ),

  requestDeleteTodo: id => propose({ action: Action.RequestDeleteTodo(id), modelUpdate: { message: "Deleting, please wait..."} } ),

  deleteTodo: id => services.deleteTodo(id).fork(null, maybeTodoId => propose({ action: Action.DeletedTodo(maybeTodoId) }))
});

export { Action, actions };
