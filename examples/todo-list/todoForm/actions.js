/*
const Action = Type({
  EditTodo: [Object],
  EditingTodo: [Object],
  ClearForm: [],
  ValidateTodo: [Object],
  RequestSaveTodo: [],
  SavedTodo: [Object]
});

const createActions = services => propose => ({
  editTodo: todo => propose(Action.EditTodo(todo)),

  editingTodo: todo => propose(Action.EditingTodo(todo)),

  saveTodo: todo => {
    propose(Action.ValidateTodo(todo));
  },

  requestSaveTodo: todo => {
    propose(Action.RequestSaveTodo());
    services.saveTodo(todo).then(savedTodo => propose(Action.SavedTodo(savedTodo)));
  },

  clearForm: () => propose(Action.ClearForm())
});

export { Action, createActions };
*/
