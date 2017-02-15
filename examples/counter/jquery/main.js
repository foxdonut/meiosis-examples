/*global flyd, meiosis, $*/
(function() {
  var streamLibrary = flyd;
  var scan = meiosis.createScan(streamLibrary);

  var initialModel = { counter: 0 };

  var view = function(model) {
    return "<div><span>jQuery Counter: " + model.counter + "</span></div>" +
      "<div><button id='inc' class='btn btn-sm btn-primary'>+ 1</button>" +
      "<button id='decr' class='btn btn-sm btn-default'>- 1</button></div>";
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
