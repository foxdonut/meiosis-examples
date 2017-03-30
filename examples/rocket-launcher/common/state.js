(function(ref) {
  ref.state = {
    ready: function(model) {
      return ((model.counter === ref.COUNTER_MAX) && !model.started && !model.launched && !model.aborted);
    },
    counting: function(model) {
      return ((model.counter <= ref.COUNTER_MAX) && (model.counter >= 0) && model.started && !model.launched && !model.aborted);
    },
    launched: function(model) {
      return ((model.counter == 0) && model.started && model.launched && !model.aborted);
    },
    aborted: function(model) {
      return (
        (model.counter <= ref.COUNTER_MAX) && (model.counter >= 0)
        && model.started && !model.launched && model.aborted
      );
    },
    compute: function(model) {
      var appState = Object.assign({}, model);
      appState.even = model.counter % 2 === 0;
      appState.closeToLaunch = model.counter < 4;
      return appState;
    }
  };
})(window);
