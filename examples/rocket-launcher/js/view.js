(function(ref) {
  var view = {};

  // Initial State
  view.init = function(model) {
    return view.ready(model) ;
  };

  // State representation of the ready state
  view.ready = function(model) {
    return (
      "<p>Counter:"+model.counter+"</p>\n\
        <form class=\"start\">\n\
          <input type=\"submit\" value=\"Start\">\n\
        </form>"
    );
  };

  // State representation of the counting state
  view.counting = function(model) {
    return (
      "<p>Count down:"+model.counter+"</p>\n\
        <form class=\"counting\">\n\
          <input type=\"submit\" value=\"Abort\">\n\
        </form>"
    );
  };

  // State representation of the aborted state
  view.aborted = function(model) {
    return (
      "<p>Aborted at Counter:"+model.counter+"</p>\n"
    );
  };

  // State representation of the launched state
  view.launched = function(_model) {
    return (
      "<p>Launched</p>"
    );
  };

  ref.view = function(model) {
    var representation = "oops... something went wrong, the system is in an invalid state";

    if (ref.state.ready(model)) {
      representation = view.ready(model);
    }

    if (ref.state.counting(model)) {
      representation = view.counting(model);
    }

    if (ref.state.launched(model)) {
      representation = view.launched(model);
    }

    if (ref.state.aborted(model)) {
      representation = view.aborted(model) ;
    }

    return representation;
  };
})(window);
