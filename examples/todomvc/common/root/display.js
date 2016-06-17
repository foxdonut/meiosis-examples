/*global window*/
(function(ref) {
  ref.root = ref.root || {};

  ref.root.display = function(createComponent) {
    var todoapp = ref.todoapp.display(createComponent);

    return function(model) {
      return ref.root.view(todoapp(model));
    };
  };
})(window);
