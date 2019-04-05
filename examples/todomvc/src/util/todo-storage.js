/*
These functions return Promises and use setTimeout to simulate async behaviour. This makes the
example more realistic. Indeed, a real-world application would make async AJAX requests to a
backend server.
*/
const STORAGE_KEY = "meiosis-todomvc"

const findIndex = (todos, todoId) => {
  let index = -1

  for (let i = 0, t = todos.length; i < t; i++) {
    if (todos[i].id === todoId) {
      index = i
      break
    }
  }
  return index
}

const replaceTodoAtIndex = (todos, todo, index) => {
  return todos
    .slice(0, index)
    .concat([todo])
    .concat(todos.slice(index + 1))
}

const deleteTodoAtIndex = (todos, index) => {
  return todos.slice(0, index).concat(todos.slice(index + 1))
}

const loadAll = () => {
  return new Promise(resolve =>
    setTimeout(() => resolve(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")), 10)
  )
}

const saveAll = todos => {
  return new Promise(resolve =>
    setTimeout(() => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
      resolve(todos)
    }, 10)
  )
}

export const todoStorage = {
  clearCompleted: () => {
    return new Promise(resolve =>
      loadAll().then(todos => {
        const updatedTodos = []

        for (let i = 0, t = todos.length; i < t; i++) {
          if (!todos[i].completed) {
            updatedTodos.push(todos[i])
          }
        }
        saveAll(updatedTodos).then(resolve)
      })
    )
  },
  deleteTodoId: todoId => {
    return new Promise((resolve, reject) =>
      loadAll().then(todos => {
        const index = findIndex(todos, todoId)

        if (index >= 0) {
          todos = deleteTodoAtIndex(todos, index)
          saveAll(todos).then(resolve)
        } else {
          reject()
        }
      })
    )
  },
  loadAll,
  saveAll,
  saveTodo: todo => {
    return new Promise(resolve =>
      loadAll().then(todos => {
        const id = todo.id

        if (id) {
          const index = findIndex(todos, id)
          todo.completed = todos[index].completed
          todos = replaceTodoAtIndex(todos, todo, index)
        } else {
          todo = { title: todo.title, id: String(new Date().getTime()), completed: false }
          todos = todos.concat([todo])
        }
        saveAll(todos).then(() => resolve(todo))
      })
    )
  },
  setAllCompleted: completed => {
    return new Promise(resolve =>
      loadAll().then(todos => {
        todos.forEach(todo => {
          todo.completed = completed
        })
        saveAll(todos).then(resolve)
      })
    )
  },
  setCompleted: (id, completed) => {
    return new Promise((resolve, reject) =>
      loadAll().then(todos => {
        const index = findIndex(todos, id)

        if (index >= 0) {
          const todo = todos[index]
          todo.completed = completed
          todos = replaceTodoAtIndex(todos, todo, index)
          saveAll(todos).then(resolve)
        } else {
          reject()
        }
      })
    )
  }
}
