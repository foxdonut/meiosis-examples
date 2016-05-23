/*global window*/
(function(ref) {
  ref.nextUpdate = function(model, update, actions) {
    if (update.saveTodo) {
      actions.clearInput();
    }
  };
})(window);
