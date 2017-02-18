import flyd from "flyd";
import { todoItem } from "../todoItem";
import services from "../todoMain/services";

export const actions = {
  requestLoadList: flyd.stream(),
  loadedList: flyd.stream(),
  requestDeleteTodo: flyd.stream(),
  deletedTodo: flyd.stream()
};

todoItem.actions.deleteTodo.map(id => {
  actions.requestDeleteTodo();
  services.deleteTodo(id).then(actions.deletedTodo);
});
