/*global window*/
(function(ref) {
  ref.todoInput = ref.todoInput || {};

  ref.todoInput.nextUpdate = function(model, update, actions) {
    if (update.saveTodo && update.saveTodo.id) {
      actions.cancelEdit();
    }
  };
})(window);
