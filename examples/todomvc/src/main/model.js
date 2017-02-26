import { actions } from "./actions";

const loadAllTodos = actions.loadAllTodos.map(todos => model => {
  model.todoIds = [];
  model.todosById = {};

  todos.forEach(todo => {
    model.todoIds.push(todo.id);
    model.todosById[todo.id] = todo;
  });

  return model;
});

export const modelChanges = loadAllTodos;
