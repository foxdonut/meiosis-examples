/*global window */
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.view = {
    todoItem: function(model, input) {
      var todo = model.todo;

      var dataId = " data-id='" + todo.id + "'";
      var checked = todo.completed ? " checked" : "";

      return "<li class='" + model.todoClasses + " '>" +
        "<div class='view'>" +
        "<input" + dataId + " class='toggle' type='checkbox'" + checked + ">" +
        "<label" + dataId + ">" + todo.title + "</label>" +
        "<button" + dataId + " class='destroy'></button>" +
        "</div>" +
        input +
        "</li>";
    },

    todoEdit: function(todo) {
      var dataId = " data-id='" + todo.id + "'";
      return "<input" + dataId + " type='text' class='edit' value='" + todo.title + "'/>";
    },

    noTodoInput: function() {
      return "";
    }
  };
})(window);
