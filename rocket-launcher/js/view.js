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
        <form onSubmit=\"actions.start();return false;\">\n\
          <input type=\"submit\" value=\"Start\">\n\
        </form>"
    );
  };

  // State representation of the counting state
  view.counting = function(model) {
    return (
      "<p>Count down:"+model.counter+"</p>\n\
        <form onSubmit=\"actions.abort();return false;\">\n\
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

  ref.view = view;
})(window);
