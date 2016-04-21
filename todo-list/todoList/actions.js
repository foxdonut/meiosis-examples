import Type from "union-type";

const Action = Type({
  RequestLoadList: [],
  LoadedList: [Object],
  EditTodo: [Object],
  RequestDeleteTodo: [Number],
  DeletedTodo: [Object]
});

const actions = services => next => ({
  requestLoadList: () => next(Action.RequestLoadList()),

  loadList: () => services.loadTodos.fork(null, res => next(Action.LoadedList(res))),

  editTodo: todo => next(Action.EditTodo(todo)),

  requestDeleteTodo: id => next(Action.RequestDeleteTodo(id)),

  deleteTodo: id => services.deleteTodo(id).fork(null, res => next(Action.DeletedTodo(res)))
});

export { Action, actions };
