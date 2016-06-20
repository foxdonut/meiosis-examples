/*global meiosisVanillaJs, window*/
(function(ref) {
  ref.footer = ref.footer || {};
  var otherReady = ref.footer.ready;

  var renderer = meiosisVanillaJs.renderer;
  var root = document.getElementById("app");

  ref.footer.ready = function(actions) {
    renderer.delegate(root, "button.clear-completed", "click", function() {
      actions.clearCompleted();
    });

    if (typeof otherReady === "function") {
      otherReady(actions);
    }
  };
})(window);
