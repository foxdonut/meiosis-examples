import { identity, complement, filter, propEq } from "ramda";

const initialModel = {
  todos: [],
  message: "Initializing..."
};

const transform = Action => (model, action) => Action.case({
  RequestLoadList: () => ({ message: "Loading, please wait..." }),
  LoadedList: identity,
  EditTodo: (todo, index) => ({ todo, index }),
  RequestDeleteTodo: _todoId => ({ message: "Deleting, please wait..."}),
  DeletedTodo: maybeTodoId => maybeTodoId
    .map(todoId => ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }))
    .getOrElse({ todos: model.todos, message: "An error occured when deleting a Todo." })
}, action);

export { initialModel, transform };
