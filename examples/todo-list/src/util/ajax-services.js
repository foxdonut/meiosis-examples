import ajax from "./ajax-axios"

const todoUrl = {
  urlForList: "/todoList",
  urlForSave: "/api/saveTodo",
  urlForDelete: function(todoId) {
    return "/api/deleteTodo/" + String(todoId)
  }
}

const loadTodos = () => ajax.getJSON(todoUrl.urlForList)

const deleteTodo = todoId => ajax.deleteJSON(todoUrl.urlForDelete(todoId))

const saveTodo = todo => ajax.postJSON(todoUrl.urlForSave, todo)

export const ajaxServices = { loadTodos, deleteTodo, saveTodo }
