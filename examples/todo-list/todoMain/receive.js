import { append, complement, filter, findIndex, identity, lensIndex, merge, propEq, set } from "ramda";
import { initialModel } from "./model";
import validate from "./validation";

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

const receive = (model, proposal) => {
  let modelUpdate = proposal.case({
    RequestLoadList: () => ({ message: "Loading, please wait..." }),
    LoadedList: identity,
    EditTodo: todo => ({ todo }),
    ValidateTodo: todo => ({ validationErrors: validate(todo) }),
    RequestSaveTodo: () => ({ message: "Saving, please wait..."}),

    SavedTodo: savedTodo => merge({ todo: initialModel().store.todo },
      savedTodo
        .map(todo => updateTodos(model.store.todos, todo))
        .map(todos => ({ todos, message: "" }))
        .getOrElse({ message: "An error occurred when saving a Todo." })),

    ClearForm: () => ({ todo: initialModel().store.todo, validationErrors: {} }),
    RequestDeleteTodo: () => ({ message: "Deleting, please wait..."}),
    DeletedTodo: maybeTodoId => maybeTodoId
      .map(todoId => ({ todos: filter(complement(propEq("id", todoId)), model.store.todos), message: "" }))
      .getOrElse({ todos: model.store.todos, message: "An error occured when deleting a Todo." })
  });

  if (modelUpdate) {
    return { store: merge(model.store, modelUpdate) };
  }
  return model;
};

export default receive;
