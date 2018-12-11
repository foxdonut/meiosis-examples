import { flowRight } from "lodash"
import { todoStorage } from "../util/todo-storage"

const displayTodosFn = todos => state => {
  state.todoIds = []
  state.todosById = {}

  todos.forEach(todo => {
    state.todoIds.push(todo.id)
    state.todosById[todo.id] = todo
  })

  return state
}

const filterFn = by => state => {
  state.filterBy = by
  return state
}

const updates = update => ({
  update,
  displayTodosFn,
  displayTodos: todos => update(displayTodosFn(todos)),
  filterFn,
  filter: by => update(filterFn(by))
})

export const actions = ({ update }) => ({
  loadAll: () => todoStorage.loadAll().then(updates.displayTodos),
  filter: by => {
    const updateFn = todos =>
      updates.update(flowRight([updates.displayTodosFn(todos), updates.filterFn(by)]))

    if (by) {
      todoStorage.filter(by).then(updateFn)
    }
    else {
      todoStorage.loadAll().then(updateFn)
    }
  },
  clearCompleted: () => todoStorage.clearCompleted().then(updates.displayTodos)
})
