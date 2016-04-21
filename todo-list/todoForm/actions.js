import Type from "union-type";

const Action = Type({
  ClearForm: [],
  EditingTodo: [Object],
  RequestSaveTodo: [Object],
  SavedTodo: [Object]
});

const actions = services => next => ({
  editingTodo: todo => next(Action.EditingTodo(todo)),

  clearForm: () => next(Action.ClearForm()),

  requestSaveTodo: todo => next(Action.RequestSaveTodo(todo)),

  saveTodo: todo => services.saveTodo(todo).fork(null, res => next(Action.SavedTodo(res)))
});

export { Action, actions };
