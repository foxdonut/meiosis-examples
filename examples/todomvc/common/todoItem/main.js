/*global window*/
(function(ref) {
  ref.todoItemComponent = function() {
    return {
      view: ref.todoItemDisplay(ref.todoItemState, ref.todoItemView)
    };
  };
})(window);
