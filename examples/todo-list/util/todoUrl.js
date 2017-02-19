const todoUrl = {
  urlForList: "/todoList",
  urlForSave: "/api/saveTodo",
  urlForDelete: function(todoId) {
    return "/api/deleteTodo/" + String(todoId);
  }
};

export default todoUrl;
