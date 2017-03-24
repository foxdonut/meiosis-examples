import { assoc, merge } from "ramda";
import { emptyTodo } from "./model";

export const updates = {
  editTodo: (update, todo) => update(model =>
    merge(model, { todo, validationErrors: { } })),

  editingTodo: (update, field, value) => update(model =>
    assoc("todo", assoc(field, value, model.todo), model)),

  validationErrors: (update, validationErrors) => update(model =>
    assoc("validationErrors", validationErrors, model)),

  clearForm: update => update(model =>
    merge(model, { todo: emptyTodo(), validationErrors: { } })
  )
};
