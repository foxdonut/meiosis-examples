/*global window*/
(function(ref) {
  ref.commonReady = function(actions) {
    var history = ref.History.createHistory();

    history.listen(function(location) {
      var route = location.hash.split("/")[1] || " ";
      actions.filter(route);
    });
  };
})(window);
