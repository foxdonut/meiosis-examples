import { assoc, prop } from "ramda"

export const model = ({ initialTodoList }) => {
  const todos = initialTodoList.reduce((result, todo) =>
    assoc(todo.id, todo, result), {});

  const todoIds = initialTodoList.map(prop("id"));

  return {
    todos,
    todoIds
  };
};
