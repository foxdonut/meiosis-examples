import { always } from "ramda";

const initialModel = {
  todo: {
    id: "",
    priority: "",
    description: ""
  }
};

const transform = Action => (model, action) => Action.case({
  EditingTodo: todo => ({ todo }),
  ClearForm: always(initialModel),
  RequestSaveTodo: always({ message: "Saving, please wait..." }),
  SavedTodo: maybeTodo => ({ savedTodo: maybeTodo })
}, action);

export { initialModel, transform };
