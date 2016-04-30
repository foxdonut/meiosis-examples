import { append, complement, filter, findIndex, lensIndex, merge, propEq, set } from "ramda";
import { Action } from "./actions";

const updateTodos = (todos, todo) =>
  (parseInt(todo.id, 10) >= 0) ?
    set(lensIndex(findIndex(propEq("id", todo.id))(todos)), todo, todos) : append(todo, todos);

const receiveUpdate = (model, update) => {
  let modelUpdate = update.modelUpdate;

  if (!modelUpdate && Action.prototype.isPrototypeOf(update.action)) {
    modelUpdate = Action.case({
      DeletedTodo: maybeTodoId => maybeTodoId
        .map(todoId => ({ todos: filter(complement(propEq("id", todoId)), model.todos), message: "" }))
        .getOrElse({ todos: model.todos, message: "An error occured when deleting a Todo." })
    }, update.action);
  }
  else if (update.savedTodo) {
    modelUpdate = update.savedTodo
      .map(todo => updateTodos(model.todos, todo))
      .map(todos => ({ todos, message: "" }))
      .getOrElse({ message: "An error occurred when saving a Todo." });
  }
  return merge(model, modelUpdate);
};

export default receiveUpdate;
