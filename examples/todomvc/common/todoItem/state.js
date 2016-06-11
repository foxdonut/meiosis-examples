/*global window*/
(function(ref) {
  ref.todoItemState = {
    editing: function(model, todo) {
      return todo.id === model.editTodo.id;
    }
  };
})(window);
