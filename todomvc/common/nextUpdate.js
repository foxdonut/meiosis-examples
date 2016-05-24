/*global window*/
(function(ref) {
  ref.nextUpdate = function(model, update, actions) {
    if (update.saveTodo) {
      if (update.saveTodo.id) {
        actions.cancelEdit();
      }
      else {
        actions.clearInput();
      }
    }
  };
})(window);
