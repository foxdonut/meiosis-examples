/*global meiosisVanillaJs, window*/
(function(ref) {
  var root = document.getElementById("app");

  ref.ready = function(actions) {
    meiosisVanillaJs.delegate(root, "form.start", "submit", function() {
      actions.start();
      return false;
    });

    meiosisVanillaJs.delegate(root, "form.counting", "submit", function() {
      actions.abort();
      return false;
    });
  };
})(window);
