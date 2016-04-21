import { append, assoc, findIndex, lensIndex, propEq, set } from "ramda";

const initialModel = {
  todo: {}
};

// FIXME
//
// updateTodos : List Todo -> Todo -> List Todo
const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id), todos);
  return (index >= 0) ?
    set(lensIndex(index), todo, todos) : append(todo, todos);
};

// updateModelFromTodo : Model -> Maybe Todo -> Model
const updateModelFromTodo = (model, maybeTodo) =>
  maybeTodo
  .map(todo => updateTodos(model.todos, todo))
  .map(todos => ({ todos, message: "" }))
  .getOrElse(assoc("message", "Sorry, an error occurred.", model));

const update = Action => (model, action) => Action.case({
  EditingTodo: todo => assoc("todo", todo, model),
  ClearForm: () => ({todo: {}}),
  RequestSaveTodo: _todo => model,
  SavedTodo: maybeTodo => updateModelFromTodo(model, maybeTodo)
}, action);

export { initialModel, update };
