import { append, assoc, dissoc, lensIndex, merge, set } from "ramda";

const updateTodos = (todos, todo, index) => {
  return (parseInt(index, 10) >= 0) ?
    set(lensIndex(index), todo, todos) : append(todo, todos);
};

const receivers = [(model, update) => {
  if (update.savedTodo) {
    return merge(model, assoc("index", null, update.savedTodo
      .map(todo => updateTodos(model.todos, todo, model.index))
      .map(todos => ({ todos, message: "" }))
      .getOrElse(assoc("message", "Sorry, an error occurred.", model))));
  }
  else {
    if (update.clearTodo) {
      model = dissoc("index", model);
      update = dissoc("clearTodo", update);
    }
    return merge(model, update);
  }
}];

export default receivers;
