export const allCompleted = state => {
  let result = true

  for (let i = 0, t = state.todoIds.length; i < t; i++) {
    if (!state.todosById[state.todoIds[i]].completed) {
      result = false
      break
    }
  }
  return result
}

const itemsLeft = state => {
  const notCompleted = todoId => !state.todosById[todoId].completed
  return state.todoIds.filter(notCompleted).length
}

export const itemsLeftText = state => {
  const left = itemsLeft(state)
  return left > 0 ? String(left) + " item" + (left === 1 ? "" : "s") + " left" : ""
}

export const clearCompletedVisible = state => state.todoIds.length - itemsLeft(state) > 0

export const filteredTodoIds = state => {
  const all = state.filterBy === "all"
  const completed = state.filterBy === "completed"
  return state.todoIds.filter(id => all || state.todosById[id].completed === completed)
}
