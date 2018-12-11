import { todoStorage } from "../util/todo-storage"

export const actions = ({ update, patches }) => ({
  toggleAllTodos: evt =>
    todoStorage.setAllCompleted(evt.target.checked)
      .then(todos => update(patches.displayTodos(todos)))
})
