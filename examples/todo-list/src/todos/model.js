import R from "ramda"

import { TodoForm } from "./todoForm";

export const model = ({ initialTodoList }) => {
  const todos = initialTodoList.reduce((result, todo) =>
    R.assoc(todo.id, todo, result), {});

  const todoIds = initialTodoList.map(R.prop("id"));

  return {
    todos,
    todoIds,
    todoForm: TodoForm.model({ label: "New Todo:"})
  };
};
