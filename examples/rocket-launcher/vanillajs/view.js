(function(ref) {
  var heading = "<ul class='nav nav-pills'>" +
    "<li role='presentation' class='active'>" +
      "<a class='btn btn-xs btn-default' href='/examples/rocket-launcher/vanillajs/index.html'>Vanilla JS version</a>" +
    "</li>" +
    "<li role='presentation'>" +
      "<a class='btn btn-xs btn-default' href='/examples/rocket-launcher/react/index.html'>React version</a>" +
    "</li>" +
  "</ul>";

  ref.view = {
    // State representation of the ready state
    ready: function(model) {
      return (
        heading +
        "<p>Counter: "+model.counter+"</p>\n\
          <form class=\"start\">\n\
            <input type=\"submit\" class=\"btn btn-primary\" value=\"Start\">\n\
          </form>"
      );
    },

    // State representation of the counting state
    counting: function(model) {
      return (
        heading +
        "<p>\n\
          Count down: "+model.counter+" "+(model.even ? "(Even)" : "(Odd)") + "\n" +
          (model.closeToLaunch ? " CLOSE TO LAUNCH!" : "") +
        "</p>\n\
        <form class=\"counting\">\n\
          <input type=\"submit\" class=\"btn btn-danger\" value=\"Abort\">\n\
        </form>"
      );
    },

    // State representation of the aborted state
    aborted: function(model) {
      return (
        heading +
        "<p>Aborted at Counter: "+model.counter+"</p>\n"
      );
    },

    // State representation of the launched state
    launched: function(_model) {
      return (
        heading +
        "<p>Launched</p>"
      );
    }
  };
})(window);
