import { root } from "../root"
import { router } from "../router"
import { todoStorage } from "../util/todo-storage"

export const createApp = () =>
  todoStorage.loadAll().then(todos => ({
    initial: Object.assign(
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
    ),
    Actions: root.Actions,
    view: root.view,
    services: [router.service, root.service]
  }))
