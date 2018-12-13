import _ from "lodash"

export const patches = {
  displayTodos: todos => state => {
    state.todoIds = []
    state.todosById = {}

    todos.forEach(todo => {
      state.todoIds.push(todo.id)
      state.todosById[todo.id] = todo
    })

    return state
  },

  editingNewTodo: title =>
    state => _.set(state, "newTodo", title),

  updateTodo: todo => state => {
    state.todosById[todo.id] = todo
    state.editTodo = { }
    return state
  },

  saveNewTodo: todo =>
    state => {
      state.todosById[todo.id] = todo
      state.todoIds.push(todo.id)
      state.newTodo = ""
      return state
    }
}
