import preventDefault from "prevent-default";
import services from "../app/services";
import { validateModel } from "./validation";

export const actions = {
  editingTodo: (update, field) => evt => actions.editingTodo({ field, value: evt.target.value }),

  saveTodo: (update, todo) => preventDefault(() => {
    const validationErrors = validateModel(todo);
    actions.validationErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      actions.saveTodoStart(true);
      services.saveTodo(todo).
        then(actions.saveTodoSuccess).
        catch(actions.saveTodoFailure);
    }
  }),

  clearForm: update => preventDefault(() => actions.clearForm(true))
};

//actions.saveTodoSuccess.map(actions.clearForm);
