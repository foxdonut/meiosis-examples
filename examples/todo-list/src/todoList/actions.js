import { todoItem } from "../todoItem";
import services from "../app/services";

todoItem.actions.deleteTodo.map(id => {
  actions.deleteTodoStart(true);
  services.deleteTodo(id).
    then(() => actions.deleteTodoSuccess(id)).
    catch(actions.deleteTodoFailure);
});
