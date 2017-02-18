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

actions.requestLoadList();
services.loadTodos.then(actions.loadedList);

/*
export const createActions = (ActionForm, services) => propose => ({
  loadList: () => {
    propose(Action.RequestLoadList());
    services.loadTodos.then(model => propose(Action.LoadedList(model)));
  },

  editTodo: todo => propose(ActionForm.EditTodo(todo)),

  deleteTodo: id => {
    propose(Action.RequestDeleteTodo());
    services.deleteTodo(id).then(maybeTodoId => propose(Action.DeletedTodo(maybeTodoId)));
  }
});
*/
