import Type from "union-type";
import { initialModel } from "./model";

const Action = Type({
  ClearForm: [],
  EditingTodo: [Object],
  RequestSaveTodo: [Object],
  SavedTodo: []
});

const actions = services => sendUpdate => ({
  editingTodo: todo => sendUpdate({ modelUpdate: { todo } }),

  clearForm: () => sendUpdate({ modelUpdate: initialModel }),

  requestSaveTodo: todo => sendUpdate({ modelUpdate: { message: "Saving, please wait..." }, action: Action.RequestSaveTodo(todo) }),

  saveTodo: todo => services.saveTodo(todo).fork(null, savedTodo => sendUpdate({ action: Action.SavedTodo(), savedTodo }))
});

export { Action, actions };
