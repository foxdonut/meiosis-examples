/*global window*/
(function(ref) {
  ref.footer = ref.footer || {};

  ref.footer.component = function() {
    return {
      actions: ref.footer.actions,
      view: ref.footer.view,
      ready: ref.footer.ready
    };
  };
})(window);
