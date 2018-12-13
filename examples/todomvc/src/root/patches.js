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

  filter: by => state => {
    state.filterBy = by
    return state
  },

  editingNewTodo: title =>
    model => _.set(model, "newTodo", title),

  updateTodo: todo => model => {
    model.todosById[todo.id] = todo
    model.editTodo = { }
    return model
  },

  saveNewTodo: todo =>
    model => {
      model.todosById[todo.id] = todo
      model.todoIds.push(todo.id)
      model.newTodo = ""
      return model
    }
}
