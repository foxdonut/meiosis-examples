/*global window*/
(function(ref) {
  ref.footer = ref.footer || {};

  ref.footer.component = function(createComponent) {
    return createComponent({
      actions: ref.footer.actions,
      view: ref.footer.view,
      ready: ref.footer.ready
    });
  };
})(window);
