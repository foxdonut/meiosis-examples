const displayTodos = todos => state => {
  state.todoIds = []
  state.todosById = {}

  todos.forEach(todo => {
    state.todoIds.push(todo.id)
    state.todosById[todo.id] = todo
  })

  return state
}

const filter = by => state => {
  state.filterBy = by
  return state
}

export const patches = {
  displayTodos,
  filter
}
