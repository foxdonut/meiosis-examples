/*global window, flyd, ReactDOM*/
(function(ref) {
  var initialModel = { counter: 0 };

  var update = flyd.stream();
  var applyUpdate = function(model, modelChange) {
    return modelChange(model);
  };

  var view = ref.reactView(update);

  var model = flyd.scan(applyUpdate, initialModel, update);
  var element = document.getElementById("app");

  model.map(function(model) {
    ReactDOM.render(view(model), element);
  });
})(window);
