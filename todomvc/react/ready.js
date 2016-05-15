/*global window*/
(function(ref) {
  ref.ready = function(actions) {
    window.addEventListener("hashchange", function() {
      var route = document.location.hash.split("/")[1] || " ";
      actions.filter(route);
    }, false);
  };
})(window);
