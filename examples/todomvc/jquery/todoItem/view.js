/*global $, Handlebars */
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  var todoItemTemplate = Handlebars.compile($("#todoItem").html());
  var todoInputTemplate = Handlebars.compile($("#todoInput").html());

  ref.todoItem.view = {
    todoItem: function(model, input) {
      return todoItemTemplate({todo: model.todo, input: input});
    },

    todoInput: function(todo) {
      return todoInputTemplate({todo: todo});
    },

    noTodoInput: function() {
      return "";
    }
  };
})(window);
