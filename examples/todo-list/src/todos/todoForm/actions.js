import { assoc, lensProp, merge, over } from "ramda";

import { validateModel } from "./validation";

export const actions = (update, actions) => {
  const clearForm = id => update(over(lensProp(id),
    model => merge(model, ({ todo: { }, validationErrors: { } }))
  ));

  return {
    editingTodo: (id, field, value) => update(over(lensProp(id),
      model => assoc("todo", assoc(field, value, model.todo), model))),

    onSaveTodo: (id, todo) => {
      const validationErrors = validateModel(todo);

      if (Object.keys(validationErrors).length === 0) {
        actions.saveTodo(todo).then(clearForm(id));
      }
      else {
        update(over(lensProp(id), assoc("validationErrors", validationErrors)));
      }
    },

    clearForm,

    onCancelEdit: (id, todo) => {
      clearForm(id, todo);
      actions.cancelEditTodo(todo);
    }
  };
};
