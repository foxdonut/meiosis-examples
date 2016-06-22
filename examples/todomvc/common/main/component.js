/*global window*/
(function(ref) {
  ref.main = ref.main || {};

  ref.main.component = function(createComponent) {
    var todoItemComponent = ref.todoItem.component(createComponent);

    return createComponent({
      actions: ref.main.actions,
      view: ref.main.display(ref.main.state, ref.main.view(todoItemComponent))
    });
  };
})(window);
