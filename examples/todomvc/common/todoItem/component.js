/*global window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.component = function() {
    return {
      actions: ref.todoItem.actions,
      view: ref.todoItem.display(ref.todoItem.state, ref.todoItem.view),
      nextUpdate: ref.todoItem.nextUpdate
    };
  };
})(window);
