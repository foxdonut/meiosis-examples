/*global flyd, $*/
(function() {
  var initialModel = { counter: 0 };

  var update = flyd.stream();
  var applyUpdate = function(model, modelChange) {
    return modelChange(model);
  };

  var addToCounter = function(value) {
    update(function(model) {
      return { counter: model.counter + value };
    });
  };

  var view = function(model) {
    return "<div class='row'>" +
        "<div class='three columns'>" +
          "<a class='button button-primary' href='/examples/counter/jquery/index.html'>jQuery version</a>" +
        "</div>" +
        "<div class='three columns'>" +
          "<a class='button' href='/examples/counter/react/index.html'>React version</a>" +
        "</div>" +
      "</div>" +
      "<div><span>Counter: " + model.counter + "</span></div>" +
      "<div>" +
        "<button id='inc' class='button-primary'>+ 1</button>" +
        "<button id='decr'>- 1</button>" +
      "</div>";
  };

  var $root = $(document.getElementById("app"));

  $root.on("click", "button#inc", function() {
    addToCounter(1);
  });
  $root.on("click", "button#decr", function() {
    addToCounter(-1);
  });

  var model = flyd.scan(applyUpdate, initialModel, update);
  var element = document.getElementById("app");

  model.map(function(model) {
    element.innerHTML = view(model);
  });
})();
