import Type from "union-type";

const Action = Type({
  RequestLoadList: [],
  LoadedList: [Object],
  EditTodo: [Object],
  RequestDeleteTodo: [],
  DeletedTodo: [Object],
  ClearForm: [],
  EditingTodo: [Object],
  RequestSaveTodo: [Object],
  SavedTodo: []
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

/*
const actions = services => propose => ({
  editingTodo: todo => propose({ modelUpdate: { todo } }),

  clearForm: () => propose({ modelUpdate: initialModel }),

  requestSaveTodo: todo => propose({ modelUpdate: { message: "Saving, please wait..." }, action: Action.RequestSaveTodo(todo) }),

  saveTodo: todo => services.saveTodo(todo).fork(null, savedTodo => propose({ action: Action.SavedTodo(), savedTodo }))
});

export { Action, actions };
 */

export { Action, actions };
