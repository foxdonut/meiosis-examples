/*global meiosis, meiosisRiot*/
(function() {
  var initialModel = { counter: 0 };

  var receive = function(model, proposal) {
    return { counter: model.counter + proposal.add };
  };

  meiosisRiot.renderer("app").intoId(document, "riotApp").then(function(resolved) {
    var Meiosis = meiosis.init();

    var actions = function(propose) {
      return {
        onInc: function() {
          propose({ add: 3 });
        },
        onDecr: function() {
          propose({ add: -3 });
        }
      };
    };

    var ready = function(actions) {
      resolved.tags[0].tags["counter"].update({actions: actions});
    };

    var Main = Meiosis.createComponent({
      initialModel: initialModel,
      actions: actions,
      receive: receive,
      ready: ready
    });

    Meiosis.run(resolved.render, Main);
  });
})();
