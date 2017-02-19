import flyd from "flyd";
import { todoItem } from "../todoItem";
import services from "../app/services";

export const actions = {
  requestLoadList: flyd.stream(),
  loadedList: flyd.stream(),
  deleteTodoStart: flyd.stream(),
  deleteTodoSuccess: flyd.stream(),
  deleteTodoFailure: flyd.stream()
};

todoItem.actions.deleteTodo.map(id => {
  actions.deleteTodoStart(true);
  services.deleteTodo(id).
    then(() => actions.deleteTodoSuccess(id)).
    catch(actions.deleteTodoFailure);
});
