/*global $, Handlebars */
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  var todoItemTemplate = Handlebars.compile($("#todoItem").html());
  var todoEditTemplate = Handlebars.compile($("#todoEdit").html());

  ref.todoItem.view = {
    todoItem: function(model, input) {
      return todoItemTemplate({model: model, input: input});
    },

    todoEdit: function(todo) {
      return todoEditTemplate({todo: todo});
    },

    noTodoInput: function() {
      return "";
    }
  };
})(window);
