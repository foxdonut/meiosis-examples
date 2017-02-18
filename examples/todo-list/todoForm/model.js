import { assoc, merge } from "ramda";
import { mergeIntoOne } from "../util/stream-util";
import { actions } from "./actions";
import { validateModel } from "./validation";
import { todoItem } from "../todoItem";

const emptyTodo = () => ({
  id: "",
  priority: "",
  description: ""
});

export const initialModel = () => ({
  todo: emptyTodo(),
  validationErrors: {}
});

const editTodo = todoItem.actions.editTodo.map(todo => model =>
  merge(model, { todo, validationErrors: { } }));

const editingTodo = actions.editingTodo.map(({ field, value }) => model =>
  assoc("todo", assoc(field, value, model.todo), model));

const clearForm = actions.clearForm.map(() => model =>
  merge(model, { todo: emptyTodo(), validationErrors: { } }));

export const modelChanges = mergeIntoOne([
  editTodo,
  editingTodo,
  clearForm
]);

/*
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
*/
