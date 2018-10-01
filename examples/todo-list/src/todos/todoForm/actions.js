import R from "ramda";

import { validateModel } from "./validation";

export const actions = ({ update, actions }) => {
  return {
    editingTodo: (id, field, value) => update(R.over(R.lensProp(id),
      model => R.assoc("todo", R.assoc(field, value, model.todo), model))),

    onSaveTodo: (id, todo) => {
      const validationErrors = validateModel(todo);

      if (Object.keys(validationErrors).length === 0) {
        actions.saveTodo(id, todo);
      }
      else {
        update(R.over(R.lensProp(id), R.assoc("validationErrors", validationErrors)));
      }
    }
  };
};
