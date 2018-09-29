import { assoc, prop } from "ramda"

import { TodoForm } from "./todoForm";

export const model = ({ initialTodoList }) => {
  const todos = initialTodoList.reduce((result, todo) =>
    assoc(todo.id, todo, result), {});

  const todoIds = initialTodoList.map(prop("id"));

  return {
    todos,
    todoIds,
    todoForm: TodoForm.model({ label: "New Todo:"})
  };
};
