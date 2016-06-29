import Type from "union-type";
import { initialModel } from "./model";

const Action = Type({
  ClearForm: [],
  EditingTodo: [Object],
  RequestSaveTodo: [Object],
  SavedTodo: []
});

const actions = services => propose => ({
  editingTodo: todo => propose({ modelUpdate: { todo } }),

  clearForm: () => propose({ modelUpdate: initialModel }),

  requestSaveTodo: todo => propose({ modelUpdate: { message: "Saving, please wait..." }, action: Action.RequestSaveTodo(todo) }),

  saveTodo: todo => services.saveTodo(todo).fork(null, savedTodo => propose({ action: Action.SavedTodo(), savedTodo }))
});

export { Action, actions };
