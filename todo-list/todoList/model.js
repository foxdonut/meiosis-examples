import { append, assoc, complement, filter, lensIndex, propEq, set } from "ramda";

const initialModel = {
  todos: [],
  message: "Initializing..."
};

// updateTodos : List Todo -> Todo -> List Todo
const updateTodos = (todos, todo, index) => {
  return (index >= 0) ?
    set(lensIndex(index), todo, todos) : append(todo, todos);
};

// updateModelFromTodo : Model -> Maybe Todo -> Model
const updateModel = (model, index) => maybeTodo =>
  maybeTodo
  .map(todo => updateTodos(model.todos, todo, index))
  .map(todos => ({ todos, message: "" }))
  .getOrElse(assoc("message", "Sorry, an error occurred.", model));

const update = Action => (model, action) => Action.case({
  RequestLoadList: () => ({ message: "Loading, please wait..." }),
  LoadedList: todos => todos,
  EditTodo: (todo, index) => ({ todo, update: updateModel(model, index) }),
  RequestDeleteTodo: _todoId => ({ message: "Deleting, please wait..."}),
  DeletedTodo: maybeTodoId => maybeTodoId
    .map(todoId => ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }))
    .getOrElse({ todos: model.todos, message: "An error occured when deleting a Todo." })
}, action);

export { initialModel, update };
