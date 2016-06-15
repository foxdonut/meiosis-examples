/*global window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.state = {
    editing: function(model, todo) {
      return todo.id === model.editTodo.id;
    }
  };
})(window);
