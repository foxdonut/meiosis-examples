import { always } from "ramda";

const initialModel = {
  todo: {}
};

const update = Action => (model, action) => Action.case({
  EditingTodo: todo => ({ todo }),
  ClearForm: always({todo: {}}),
  RequestSaveTodo: always({ message: "Saving, please wait..." }),
  SavedTodo: maybeTodo => ({ savedTodo: maybeTodo })
}, action);

export { initialModel, update };
