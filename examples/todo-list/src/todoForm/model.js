import { assoc, merge } from "ramda";
import { actions } from "./actions";

const emptyTodo = () => ({
  id: "",
  priority: "",
  description: ""
});

export const model = () => ({
  todo: emptyTodo(),
  validationErrors: {}
});

/*
const editTodo = todoItem.actions.editTodo.map(todo => model =>
  merge(model, { todo, validationErrors: { } }));

const editingTodo = actions.editingTodo.map(({ field, value }) => model =>
  assoc("todo", assoc(field, value, model.todo), model));

const validationErrors = actions.validationErrors.map(validationErrors => model =>
  assoc("validationErrors", validationErrors, model));

const clearForm = actions.clearForm.map(() => model =>
  merge(model, { todo: emptyTodo(), validationErrors: { } }));
*/
