import flyd from "flyd";
import preventDefault from "prevent-default";
import services from "../app/services";
import { validateModel } from "./validation";

export const actions = {
  editingTodo: flyd.stream(),
  validationErrors: flyd.stream(),
  saveTodoStart: flyd.stream(),
  saveTodoSuccess: flyd.stream(),
  saveTodoFailure: flyd.stream(),
  clearForm: flyd.stream()
};

export const intents = {
  editingTodo: field => evt => actions.editingTodo({ field, value: evt.target.value }),
  saveTodo: todo => preventDefault(() => {
    const validationErrors = validateModel(todo);
    actions.validationErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      actions.saveTodoStart(true);
      services.saveTodo(todo).
        then(actions.saveTodoSuccess).
        catch(actions.saveTodoFailure);
    }
  }),
  clearForm: preventDefault(() => actions.clearForm(true))
};

actions.saveTodoSuccess.map(actions.clearForm);
