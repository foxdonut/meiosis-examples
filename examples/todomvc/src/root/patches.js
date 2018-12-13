import { S } from "patchinko/explicit"

export const patches = {
  displayTodos: todos => ({
    todoIds: todos.map(todo => todo.id),
    todosById: todos.reduce((result, todo) => {
      result[todo.id] = todo
      return result
    }, {})
  }),

  editingNewTodo: title => ({ newTodo: title }),

  updateTodo: todo => ({
    todosById: S(todosById => {
      todosById[todo.id] = todo
      return todosById
    }),
    editTodo: {}
  }),

  saveNewTodo: todo => ({
    todosById: S(todosById => {
      todosById[todo.id] = todo
      return todosById
    }),
    todoIds: S(todoIds => {
      todoIds.push(todo.id)
      return todoIds
    }),
    newTodo: ""
  })
}
