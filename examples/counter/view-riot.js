(function(ref) {
  ref.riotView = function(model, propose) {
    var onInc = function(_evt) {
      propose({ add: 5 });
    };
    var onDecr = function(_evt) {
      propose({ add: -5 });
    };
    var events = { onInc: onInc, onDecr: onDecr };

    return { model: model, events: events, propose: propose };
  };
})(window);

