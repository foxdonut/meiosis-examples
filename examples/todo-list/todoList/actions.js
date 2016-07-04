import Type from "union-type";

const Action = Type({
  RequestLoadList: [],
  LoadedList: [Object],
  EditTodo: [Object],
  RequestDeleteTodo: [],
  DeletedTodo: [Object]
});

const actions = services => propose => ({
  requestLoadList: () => {
    propose(Action.RequestLoadList());
    services.loadTodos.fork(null, model => propose(Action.LoadedList(model)));
  },

  editTodo: (todo) => propose(Action.EditTodo(todo)),

  requestDeleteTodo: id => {
    propose(Action.RequestDeleteTodo());
    services.deleteTodo(id).fork(null, maybeTodoId => propose(Action.DeletedTodo(maybeTodoId)));
  }
});

export { Action, actions };
