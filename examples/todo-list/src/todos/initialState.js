import { todoForm } from "./todoForm"

export const initialState = initialTodoList => {
  return {
    todos: initialTodoList,
    todoForm: todoForm.initialState()
  }
}
