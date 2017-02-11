/*global window, meiosis, ReactDOM*/
(function(ref) {
  var initialModel = { counter: 0 };

  var Meiosis = meiosis.newInstance();

  var view = ref.reactView;

  var modelChanges = meiosis.map(function(add) {
    return function(model) {
      return { counter: model.counter + add };
    };
  }, ref.addAction);

  var app = Meiosis.run({ initialModel: initialModel, modelChanges: modelChanges });
  var element = document.getElementById("reactApp");

  meiosis.on(function(model) {
    ReactDOM.render(view(model), element);
  }, app.render);
})(window);
