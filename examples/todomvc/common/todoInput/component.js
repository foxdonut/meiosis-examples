/*global window*/
(function(ref) {
  ref.todoInput = ref.todoInput || {};

  ref.todoInput.component = function(createComponent) {
    return createComponent({
      actions: ref.todoInput.actions,
      view: ref.todoInput.display(ref.todoItem.state, ref.todoInput.view),
      postRender: ref.todoInput.postRender, // only jquery and vanillajs need postRender
      ready: ref.todoInput.ready, // only jquery and vanillajs need ready
      nextUpdate: ref.todoInput.nextUpdate
    });
  };
})(window);
