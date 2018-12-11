import _ from "lodash"

import { todoStorage } from "../util/todo-storage"

export const actions = ({ update }) => ({
  deleteTodo: todoId => () => todoStorage.deleteTodoId(todoId).then(
    () => update(model => {
      delete model.todosById[todoId]
      model.todoIds.splice(model.todoIds.indexOf(todoId), 1)
      return model
    })
  ),

  editTodo: todo => () => update(model => _.set(model, "editTodo", todo)),

  toggleTodo: todoId => evt => {
    const completed = evt.target.checked
    todoStorage.setCompleted(todoId, completed).then(
      () => update(model => _.set(model, ["todosById", todoId, "completed"], completed))
    )
  }
})
