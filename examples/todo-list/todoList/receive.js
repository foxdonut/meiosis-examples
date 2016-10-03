import { append, complement, filter, findIndex, identity, lensIndex, merge, propEq, set } from "ramda";

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

const receive = (model, proposal) => {
  let modelUpdate = proposal.case({
    RequestLoadList: () => ({ message: "Loading, please wait..." }),
    LoadedList: identity,
    RequestSaveTodo: () => ({ message: "Saving, please wait..."}),

    SavedTodo: savedTodo =>
      savedTodo
        .map(todo => updateTodos(model.todos, todo))
        .map(todos => ({ todos, message: "" }))
        .getOrElse({ message: "An error occurred when saving a Todo." }),

    RequestDeleteTodo: () => ({ message: "Deleting, please wait..."}),
    DeletedTodo: maybeTodoId => maybeTodoId
      .map(todoId => ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }))
      .getOrElse({ todos: model.todos, message: "An error occured when deleting a Todo." })
  });

  if (modelUpdate) {
    return merge(model, modelUpdate);
  }
  return model;
};

export default receive;
