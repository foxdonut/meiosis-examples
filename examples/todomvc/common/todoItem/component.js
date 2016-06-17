/*global window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.component = function() {
    return {
      actions: ref.todoItem.actions,
      view: ref.todoItem.display(ref.todoItem.state, ref.todoItem.view),
      postRender: ref.todoItem.postRender, // only jquery and vanillajs need postRender
      ready: ref.todoItem.ready, // only jquery and vanillajs need ready
      nextUpdate: ref.todoItem.nextUpdate
    };
  };
})(window);
