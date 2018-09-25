import { assoc, merge } from "ramda";

import { validateModel } from "./validation";

export const actions = (update, actions) => {
  const clearForm = () => update(model => merge(model, ({ todo: { }, validationErrors: { } })));

  return {
    editingTodo: (field, value) => update(model =>
      assoc("todo", assoc(field, value, model.todo), model)),

    clearForm,

    onSaveTodo: todo => {
      const validationErrors = validateModel(todo);

      if (Object.keys(validationErrors).length === 0) {
        actions.saveTodo(todo).then(clearForm);
      }
      else {
        update(assoc("validationErrors", validationErrors));
      }
    }
  };
};
