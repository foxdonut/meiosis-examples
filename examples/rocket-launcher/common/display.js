(function(ref) {
  ref.display = function(state, view) {
    return function(model) {
      var representation = "oops... something went wrong, the system is in an invalid state";

      if (state.ready(model)) {
        representation = view.ready(model);
      }

      if (state.counting(model)) {
        representation = view.counting(model);
      }

      if (state.launched(model)) {
        representation = view.launched(model);
      }

      if (state.aborted(model)) {
        representation = view.aborted(model) ;
      }

      return representation;
    };
  };
})(window);
