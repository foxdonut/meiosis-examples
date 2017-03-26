import { assoc, merge } from "ramda";
import preventDefault from "prevent-default";
import { emptyTodo } from "./model";
import { validateModel } from "./validation";

const updates = {
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

export const actions = (update, events, services) => {
  events.editTodo.map(todo => updates.editTodo(update, todo));

  events.saveTodoSuccess.map(() => updates.clearForm(update));

  return {
    editingTodo: (field) => evt => updates.editingTodo(update, field, evt.target.value),

    saveTodo: todo => preventDefault(() => {
      const validationErrors = validateModel(todo);
      updates.validationErrors(update, validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        events.saveTodoStart(true);
        services.saveTodo(todo).
          then(events.saveTodoSuccess).
          catch(events.saveTodoFailure);
      }
    }),

    clearForm: () => preventDefault(() => updates.clearForm(update))
  };
};
