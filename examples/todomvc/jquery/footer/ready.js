/*global $, window*/
(function(ref) {
  ref.footer = ref.footer || {};
  var otherReady = ref.footer.ready;

  var $root = $(document.getElementById("app"));

  ref.footer.ready = function(actions) {
    $root.on("click", "button.clear-completed", function() {
      actions.clearCompleted();
    });

    if (typeof otherReady === "function") {
      otherReady(actions);
    }
  };
})(window);
