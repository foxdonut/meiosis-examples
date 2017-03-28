/*global flyd, meiosis, $*/
(function() {
  var streamLibrary = flyd;
  var scan = meiosis.createScan(streamLibrary);

  var initialModel = { counter: 0 };

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

  var addToCounter = flyd.stream();

  var modelChanges = addToCounter.map(function(value) {
    return function(model) {
      return { counter: model.counter + value };
    };
  });

  var model = scan(meiosis.applyModelChange, initialModel, modelChanges);
  var element = document.getElementById("app");

  model.map(function(model) {
    element.innerHTML = view(model);
  });

  var $root = $(document.getElementById("app"));

  $root.on("click", "button#inc", function(_evt) {
    addToCounter(1);
  });
  $root.on("click", "button#decr", function(_evt) {
    addToCounter(-1);
  });

})();
