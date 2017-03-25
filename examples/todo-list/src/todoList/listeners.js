import { append, assoc, findIndex, lensIndex, merge, propEq, set } from "ramda";

const updateTodos = (todos, todo) => {
  const index = findIndex(propEq("id", todo.id))(todos);
  return index >= 0 ? set(lensIndex(index), todo, todos) : append(todo, todos);
};

export const listeners = (update, events) => {
  events.pleaseWait.map(() => update(model => assoc("message", "Processing, please wait...", model)));

  events.todoList.map(todos => update(model => merge(model, { todos, message: "" })));

  events.updateTodo.map(todo => update(model =>
    merge(model, { todos: updateTodos(model.todos, todo), message: "" })
  ));
};
