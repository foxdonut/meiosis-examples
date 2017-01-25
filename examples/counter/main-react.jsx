/*global window, meiosis, ReactDOM*/
(function() {
  var initialModel = { counter: 0 };

  var receive = function(model, proposal) {
    return { counter: model.counter + proposal.add };
  };

  var Meiosis = meiosis.newInstance();

  var view = window.reactView(Meiosis.propose);

  var app = Meiosis.run({ initialModel: initialModel, scanner: receive });
  var element = document.getElementById("reactApp");

  meiosis.on(function(model) {
    ReactDOM.render(view(model), element);
  }, app.render);
})();
