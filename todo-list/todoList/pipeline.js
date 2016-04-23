import { append, assoc, lensIndex, merge, set } from "ramda";

const updateTodos = (todos, todo, index) => {
  return (parseInt(index, 10) >= 0) ?
    set(lensIndex(index), todo, todos) : append(todo, todos);
};

const pipeline = (model, update) => {
  if (update.savedTodo) {
    return merge(model, assoc("index", null, update.savedTodo
      .map(todo => updateTodos(model.todos, todo, model.index))
      .map(todos => ({ todos, message: "" }))
      .getOrElse(assoc("message", "Sorry, an error occurred.", model))));
  }
  else {
    return merge(model, update);
  }
};

export default pipeline;
