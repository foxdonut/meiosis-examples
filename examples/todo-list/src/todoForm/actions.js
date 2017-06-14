import { assoc, merge } from "ramda";
import preventDefault from "prevent-default";
import { validateModel } from "./validation";

const updates = {
  editingTodo: (update, field, value) => update(model =>
    assoc("todo", assoc(field, value, model.todo), model)),

  validationErrors: (update, validationErrors) => update(model =>
    assoc("validationErrors", validationErrors, model)),

  clearForm: update => update(model =>
    merge(model, { todo: { }, validationErrors: { } })
  )
};

export const createActions = (update, parentActions) => ({
  editingTodo: (field) => evt => updates.editingTodo(update, field, evt.target.value),

  saveTodo: todo => preventDefault(() => {
    const validationErrors = validateModel(todo);
    updates.validationErrors(update, validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      parentActions.saveTodo(todo);
    }
  }),

  clearForm: () => preventDefault(() => updates.clearForm(update))
});
