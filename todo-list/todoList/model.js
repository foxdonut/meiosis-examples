import { complement, filter, propEq } from "ramda";

const initialModel = {
  todos: [],
  message: "Initializing..."
};

const update = Action => (model, action) => Action.case({
  RequestLoadList: () => ({ message: "Loading, please wait..." }),
  LoadedList: todos => todos,
  EditTodo: todo => ({ todo }),
  RequestDeleteTodo: _todoId => ({ message: "Deleting, please wait..."}),
  DeletedTodo: maybeTodoId => maybeTodoId
    .map(todoId => ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }))
    .getOrElse({ todos: model.todos, message: "An error occured when deleting a Todo." })
}, action);

export { initialModel, update };
