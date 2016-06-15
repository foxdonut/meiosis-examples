/*global window*/
(function(ref) {
  ref.header = ref.header || {};

  ref.header.nextUpdate = function(model, update, actions) {
    if (update.saveTodo && !update.saveTodo.id) {
      actions.clearInput();
    }
  };
})(window);
