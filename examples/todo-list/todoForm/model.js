import { merge } from "ramda";
import { validateModel } from "./validation";
import { todoItem } from "../todoItem";

const emptyTodo = () => ({
  id: "",
  priority: "",
  description: ""
});

const initialModel = () => ({
  todo: emptyTodo(),
  validationErrors: {}
});

export const modelChanges = todoItem.actions.editTodo.map(todo => model =>
  ({ todo, validationErrors: { } }));

const receive = (model, proposal) => {
  let modelUpdate = proposal.case({
    EditTodo: todo => ({ todo, validationErrors: {} }),
    EditingTodo: todo => ({ todo }),
    ValidateTodo: todo => ({ validationErrors: validate(todo) }),
    ClearForm: () => ({ todo: emptyTodo(), validationErrors: {} })
  });

  if (modelUpdate) {
    return merge(model, modelUpdate);
  }
  return model;
};

//const nextAction = ({ model, proposal, actions }) => {
const nextAction = ({ model, proposal, actions }) => {
  proposal.case({
    ValidateTodo: todo => {
      if (Object.keys(model.validationErrors).length === 0) {
        actions.requestSaveTodo(todo);
      }
    },
    SavedTodo: () => actions.clearForm()
  });
};

export { initialModel, emptyTodo };
