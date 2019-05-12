import { root } from "../root"
import { router } from "../router"
import { todoStorage } from "../util/todo-storage"

const Initial = () =>
  todoStorage.loadAll().then(todos =>
    Object.assign(
      {
        editTodo: {},
        newTodo: "",
        filterBy: "all",
        todoIds: todos.map(todo => todo.id),
        todosById: todos.reduce((acc, todo) => {
          acc[todo.id] = todo
          return acc
        }, {})
      },
      router.parseUrl()
    )
  )

export const app = {
  Initial,
  Actions: root.Actions,
  accept: [root.accept],
  view: root.view,
  services: [router.service]
}
