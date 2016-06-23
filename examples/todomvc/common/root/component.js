/*global window*/
(function(ref) {
  ref.rootComponent = function(createComponent) {
    var todoappComponent = ref.todoapp.component(createComponent);

    return createComponent({
      initialModel: ref.initialModel,
      view: ref.root.view(todoappComponent),
      receiveUpdate: ref.receiveUpdate,
      ready: ref.ready // only jquery and vanillajs need ready
    });
  };
})(window);
