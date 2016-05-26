const todoUrl = {
  get: "/todoList",
  save: "/api/saveTodo",
  delete: function(todoId) {
    return "/api/deleteTodo/" + String(todoId);
  }
};

export default todoUrl;
