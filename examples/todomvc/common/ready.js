/*global window*/
(function(ref) {
  ref.commonReady = function(actions) {
    var history = ref.History.createHistory();

    history.listen(function(location) {
      var route = location.hash.split("/")[1] || "all";
      actions.filter(route);
    });
  };
})(window);
