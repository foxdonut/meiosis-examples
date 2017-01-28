import Type from "union-type";

export const Action = Type({
  RequestLoadList: [],
  LoadedList: [Object],
  RequestDeleteTodo: [],
  DeletedTodo: [Object]
});

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
