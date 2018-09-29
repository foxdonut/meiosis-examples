import { assoc, lensProp, over } from "ramda";

import { validateModel } from "./validation";

export const actions = (update, actions) => {
  return {
    editingTodo: (id, field, value) => update(over(lensProp(id),
      model => assoc("todo", assoc(field, value, model.todo), model))),

    onSaveTodo: (id, todo) => {
      const validationErrors = validateModel(todo);

      if (Object.keys(validationErrors).length === 0) {
        actions.saveTodo(id, todo);
      }
      else {
        update(over(lensProp(id), assoc("validationErrors", validationErrors)));
      }
    }
  };
};
