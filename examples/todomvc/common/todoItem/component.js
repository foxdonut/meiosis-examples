/*global window*/
(function(ref) {
  ref.todoItem = ref.todoItem || {};

  ref.todoItem.component = function(createComponent) {
    var todoInputComponent = ref.todoInput.component(createComponent);

    return createComponent({
      actions: ref.todoItem.actions,
      view: ref.todoItem.display(ref.todoItem.state, ref.todoItem.view(todoInputComponent)),
      ready: ref.todoItem.ready // only jquery and vanillajs need ready
    });
  };
})(window);
