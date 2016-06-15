/*global window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.nextUpdate = function(model, update, actions) {
    if (update.saveTodo && update.saveTodo.id) {
      actions.cancelEdit();
    }
  };
})(window);
