/*global meiosis, $*/
(function() {
  var initialModel = { counter: 0 };

  var view = function(model) {
    return "<div><span>jQuery Counter: " + model.counter + "</span></div>" +
      "<div><button id='inc' class='btn btn-sm btn-primary'>+ 1</button>" +
      "<button id='decr' class='btn btn-sm btn-default'>- 1</button></div>";
  };

  var receive = function(model, proposal) {
    return { counter: model.counter + proposal.add };
  };

  var app = meiosis.run({ initialModel: initialModel, scanner: receive });
  var element = document.getElementById("app");

  meiosis.on(function(model) {
    element.innerHTML = view(model);
  }, app.render);

  var $root = $(document.getElementById("app"));

  $root.on("click", "button#inc", function(_evt) {
    meiosis.propose({ add: 1 });
  });
  $root.on("click", "button#decr", function(_evt) {
    meiosis.propose({ add: -1 });
  });

})();
