import { actions } from "./actions";

const displayTodos = actions.displayTodos.map(todos => model => {
  model.todoIds = [];
  model.todosById = {};

  todos.forEach(todo => {
    model.todoIds.push(todo.id);
    model.todosById[todo.id] = todo;
  });

  return model;
});

export const modelChanges = displayTodos;
