import { createActions } from "./actions";
import { createView } from "./view.jsx";
import { createTodoList } from "./todoList";
import { createTodoForm } from "./todoForm";

export const createTodos = id => {
  const todoList = createTodoList(id + ":todoList");
  const todoForm = createTodoForm(id + ":todoForm");

  return {
    model: todos => Object.assign(
      todoList.model(todos),
      todoForm.model()
    ),
    createActions: createActions(id, { todoList, todoForm }),
    createView: createView(id, { todoList, todoForm })
  };
};
