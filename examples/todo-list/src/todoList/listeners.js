import { append, assoc, complement, findIndex, filter, lensIndex, merge, propEq, set } from "ramda";

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

export const createListeners = (update, events) => {
  events.onPleaseWait.map(() => update(model => assoc("message", "Processing, please wait...", model)));
  events.onError.map(() => update(model => assoc("message", "Sorry, an error occurred.", model)));

  events.onUpdateTodoList.map(todos => update(model => merge(model, { todos, message: "" })));

  events.onUpdateTodo.map(todo => update(model =>
    merge(model, { todos: updateTodos(model.todos, todo), message: "" })
  ));

  events.onDeleteTodo.map(todoId => update(model =>
    merge(model, { todos: filter(complement(propEq("id", todoId)), model.todos), message: "" })));
};
