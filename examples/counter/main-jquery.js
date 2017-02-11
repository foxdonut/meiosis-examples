/*global meiosis, $*/
(function() {
  var initialModel = { counter: 0 };

  var view = function(model) {
    return "<div><span>jQuery Counter: " + model.counter + "</span></div>" +
      "<div><button id='inc' class='btn btn-sm btn-primary'>+ 1</button>" +
      "<button id='decr' class='btn btn-sm btn-default'>- 1</button></div>";
  };

  var addAction = meiosis.stream();

  var modelChanges = meiosis.map(function(add) {
    return function(model) {
      return { counter: model.counter + add };
    };
  }, addAction);

  var app = meiosis.run({ initialModel: initialModel, modelChanges: modelChanges });
  var element = document.getElementById("app");

  meiosis.on(function(model) {
    element.innerHTML = view(model);
  }, app.render);

  var $root = $(document.getElementById("app"));

  $root.on("click", "button#inc", function(_evt) {
    addAction(1);
  });
  $root.on("click", "button#decr", function(_evt) {
    addAction(-1);
  });

})();
