(function(ref) {
  var heading = "<div class='pure-menu pure-menu-horizontal'>" +
    "<ul class='pure-menu-list'>" +
      "<li class='pure-menu-item pure-menu-selected'>" +
        "<a class='pure-menu-link' href='/examples/rocket-launcher/vanillajs/index.html'>Vanilla JS version</a>" +
      "</li>" +
      "<li class='pure-menu-item'>" +
        "<a class='pure-menu-link' href='/examples/rocket-launcher/react/index.html'>React version</a>" +
      "</li>" +
    "</ul>" +
  "</div>";

  ref.view = {
    // State representation of the ready state
    ready: function(model) {
      return (
        heading +
        "<p>Counter: "+model.counter+"</p>\n\
          <form class=\"start\">\n\
            <input type=\"submit\" class=\"pure-button pure-button-primary\" value=\"Start\">\n\
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
          <input type=\"submit\" class=\"pure-button\" value=\"Abort\">\n\
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
