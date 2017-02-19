import flyd from "flyd";
import preventDefault from "prevent-default";
import services from "../app/services";

export const actions = {
  editingTodo: flyd.stream(),
  saveTodoStart: flyd.stream(),
  saveTodoFinish: flyd.stream(),
  clearForm: flyd.stream()
};

export const intents = {
  editingTodo: field => evt => actions.editingTodo({ field, value: evt.target.value }),
  saveTodo: todo => preventDefault(() => {
    actions.saveTodoStart(true);
    services.saveTodo(todo).then(actions.saveTodoFinish);
  }),
  clearForm: preventDefault(() => actions.clearForm(true))
};
