import { append, complement, filter, findIndex, identity, lensIndex, merge, propEq, set } from "ramda";
import { initialModel } from "./model";
import { Action } from "./actions";

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

const receive = (model, proposal) => {
  let modelUpdate = null;

  modelUpdate = Action.case({
    RequestLoadList: () => ({ message: "Loading, please wait..." }),
    LoadedList: identity,
    EditTodo: todo => ({ todo }),
    RequestSaveTodo: () => ({ message: "Saving, please wait..."}),

    SavedTodo: savedTodo => merge({ todo: initialModel().root.todo },
      savedTodo
        .map(todo => updateTodos(model.root.todos, todo))
        .map(todos => ({ todos, message: "" }))
        .getOrElse({ message: "An error occurred when saving a Todo." })),

    ClearForm: () => ({ todo: initialModel().root.todo }),
    RequestDeleteTodo: () => ({ message: "Deleting, please wait..."}),
    DeletedTodo: maybeTodoId => maybeTodoId
      .map(todoId => ({ todos: filter(complement(propEq("id", todoId)), model.root.todos), message: "" }))
      .getOrElse({ todos: model.root.todos, message: "An error occured when deleting a Todo." })
  }, proposal);

  if (modelUpdate) {
    return { root: merge(model.root, modelUpdate) };
  }
  return model;
};

export default receive;
