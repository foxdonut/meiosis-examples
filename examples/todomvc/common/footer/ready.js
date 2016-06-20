/*global window*/
(function(ref) {
  ref.footer = ref.footer || {};

  // only jquery and vanillajs need an additional ready function
  var otherReady = ref.footer.ready;

  ref.footer.ready = function(actions) {
    var history = ref.History.createHistory();

    history.listen(function(location) {
      var route = location.hash.split("/")[1] || "all";
      actions.filter(route);
    });

    if (typeof otherReady === "function") {
      otherReady(actions);
    }
  };
})(window);
