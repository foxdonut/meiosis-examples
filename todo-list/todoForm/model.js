import { assoc } from "ramda";

const initialModel = {
  todo: {}
};

const update = Action => (model, action) => Action.case({
  EditingTodo: todo => assoc("todo", todo, model),
  ClearForm: () => ({todo: {}}),
  RequestSaveTodo: _todo => model,
  SavedTodo: maybeTodo => model.update(maybeTodo)
}, action);

export { initialModel, update };
