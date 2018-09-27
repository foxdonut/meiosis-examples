import { assoc, lensPath, merge, over } from "ramda";

import { validateModel } from "./validation";

export const actions = (update, actions) => {
  const clearForm = path => update(over(lensPath(path),
    model => merge(model, ({ todo: { }, validationErrors: { } }))
  ));

  return {
    editingTodo: (path, field, value) => update(over(lensPath(path),
      model => assoc("todo", assoc(field, value, model.todo), model))),

    onSaveTodo: (path, todo) => {
      const validationErrors = validateModel(todo);

      if (Object.keys(validationErrors).length === 0) {
        actions.saveTodo(todo).then(() => clearForm(path));
      }
      else {
        update(over(lensPath(path), assoc("validationErrors", validationErrors)));
      }
    },

    clearForm,

    onCancelEdit: (path, todo) => {
      clearForm(path, todo);
      actions.cancelEditTodo(todo);
    }
  };
};
