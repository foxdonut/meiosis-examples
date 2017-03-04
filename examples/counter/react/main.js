/*global window, flyd, meiosis, ReactDOM*/
(function(ref) {
  var streamLibrary = flyd;
  var scan = meiosis.createScan(streamLibrary);

  var initialModel = { counter: 0 };

  var view = ref.reactView;

  var modelChanges = ref.addToCounter.map(function(value) {
    return function(model) {
      return { counter: model.counter + value };
    };
  });

  var model = scan(meiosis.applyModelChange, initialModel, modelChanges);
  var element = document.getElementById("app");

  model.map(function(model) {
    ReactDOM.render(view(model), element);
  });
})(window);
