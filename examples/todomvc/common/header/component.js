/*global window*/
(function(ref) {
  ref.header = ref.header || {};

  ref.header.component = function() {
    return {
      actions: ref.header.actions,
      view: ref.header.view,
      nextUpdate: ref.header.nextUpdate
    };
  };
})(window);
