import { todoStorage } from "../util/todo-storage"

const ENTER_KEY = 13
const ESCAPE_KEY = 27

const displayTodos = todos => ({
  todoIds: todos.map(todo => todo.id),
  todosById: todos.reduce((result, todo) => {
    result[todo.id] = todo
    return result
  }, {})
})

const editingNewTodo = title => ({ newTodo: title })

const updateTodo = todo => ({
  todosById: todosById => {
    todosById[todo.id] = todo
    return todosById
  },
  editTodo: () => ({})
})

const saveNewTodo = todo => ({
  todosById: todosById => {
    todosById[todo.id] = todo
    return todosById
  },
  todoIds: todoIds => {
    todoIds.push(todo.id)
    return todoIds
  },
  newTodo: ""
})

export const Actions = update => ({
  loadAll: () => todoStorage.loadAll().then(todos => update(displayTodos(todos))),

  clearCompleted: () => todoStorage.clearCompleted().then(todos => update(displayTodos(todos))),

  deleteTodo: todoId =>
    todoStorage.deleteTodoId(todoId).then(() =>
      update({
        todosById: {
          [todoId]: undefined
        },
        todoIds: todoIds => {
          todoIds.splice(todoIds.indexOf(todoId), 1)
          return todoIds
        }
      })
    ),

  toggleAllTodos: checked =>
    todoStorage.setAllCompleted(checked).then(todos => update(displayTodos(todos))),

  toggleTodo: (todoId, completed) => {
    todoStorage.setCompleted(todoId, completed).then(() =>
      update({
        todosById: {
          [todoId]: {
            completed
          }
        }
      })
    )
  },

  newTodoKeyUp: evt => {
    if (evt.keyCode === ENTER_KEY) {
      const title = evt.target.value.trim()

      if (title) {
        todoStorage.saveTodo({ title }).then(todo => update(saveNewTodo(todo)))
      }
    } else {
      update(editingNewTodo(evt.target.value))
    }
  },

  editTodo: (todo, evt) => {
    update({ editTodo: todo })
    evt.target.parentElement.parentElement.getElementsByClassName("edit")[0].focus()
  },

  editBlur: () => {
    update(state => {
      if (state.editTodo.id) {
        const title = state.editTodo.title.trim()
        if (title) {
          todoStorage.saveTodo(state.editTodo).then(todo => update(updateTodo(todo)))
        }
      }
      return state
    })
  },

  editKeyUp: (id, evt) => {
    const title = evt.target.value

    if (evt.keyCode === ESCAPE_KEY) {
      update({ editTodo: () => ({}) })
    } else if (evt.keyCode === ENTER_KEY) {
      const todo = { id, title }
      const editing = !!todo.id
      todo.title = todo.title.trim()

      if (editing && todo.title) {
        todoStorage.saveTodo(todo).then(updatedTodo => update(updateTodo(updatedTodo)))
      }
    } else {
      update({ editTodo: { id, title } })
    }
  }
})
