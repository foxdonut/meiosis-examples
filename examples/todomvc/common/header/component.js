/*global window*/
(function(ref) {
  ref.header = ref.header || {};

  ref.header.component = function(createComponent) {
    return createComponent({
      actions: ref.header.actions,
      view: ref.header.view,
      ready: ref.header.ready, // only jquery and vanillajs need ready
      nextUpdate: ref.header.nextUpdate
    });
  };
})(window);
