import Type from "union-type";

const Action = Type({
  RequestLoadList: [],
  LoadedList: [Object],
  EditTodo: [Object],
  RequestDeleteTodo: [],
  DeletedTodo: [Object],
  ClearForm: [],
  RequestSaveTodo: [],
  SavedTodo: [Object]
});

const createActions = services => propose => ({
  loadList: () => {
    propose(Action.RequestLoadList());
    services.loadTodos.then(model => propose(Action.LoadedList(model)));
  },

  editTodo: todo => propose(Action.EditTodo(todo)),

  saveTodo: todo => {
    propose(Action.RequestSaveTodo());
    services.saveTodo(todo).then(savedTodo => propose(Action.SavedTodo(savedTodo)));
  },

  clearForm: () => propose(Action.ClearForm()),

  deleteTodo: id => {
    propose(Action.RequestDeleteTodo());
    services.deleteTodo(id).then(maybeTodoId => propose(Action.DeletedTodo(maybeTodoId)));
  }
});

export { Action, createActions };
