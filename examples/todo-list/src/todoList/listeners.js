import { append, assoc, complement, findIndex, filter, lensIndex, merge, propEq, set } from "ramda";

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

export const listeners = (update, events) => {
  events.pleaseWait.map(() => update(model => assoc("message", "Processing, please wait...", model)));
  events.error.map(() => update(model => assoc("message", "Sorry, an error occurred.", model)));

  events.updateTodoList.map(todos => update(model => merge(model, { todos, message: "" })));

  events.updateTodo.map(todo => update(model =>
    merge(model, { todos: updateTodos(model.todos, todo), message: "" })
  ));

  events.updateDeletedTodo.map(todoId => update(model =>
    merge(model, { todos: filter(complement(propEq("id", todoId)), model.todos), message: "" })));
};
