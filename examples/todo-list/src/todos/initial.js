import { todoForm } from "./todoForm"

export const Initial = initialTodoList => {
  return {
    todos: initialTodoList,
    todoForm: todoForm.Initial()
  }
}
