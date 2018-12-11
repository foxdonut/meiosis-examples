import _ from "lodash"
import { todoStorage } from "../util/todo-storage"

export const actions = ({ update, patches }) => ({
  loadAll: () => todoStorage.loadAll().then(todos => update(patches.displayTodos(todos))),
  filter: by => {
    const updateFn = todos =>
      update(_.flow([patches.displayTodos(todos), patches.filter(by)]))

    if (by) {
      todoStorage.filter(by).then(updateFn)
    }
    else {
      todoStorage.loadAll().then(updateFn)
    }
  },
  clearCompleted: () => todoStorage.clearCompleted()
    .then(todos => update(patches.displayTodos(todos)))
})
