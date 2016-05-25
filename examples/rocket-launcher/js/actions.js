/*global window*/
(function(ref) {
  ref.actions = function(sendUpdate) {
    return {
      start: function() {
        sendUpdate({ started: true });
      },
      decrement: function(counter) {
        setTimeout(function() {
          sendUpdate({ counter: counter - 1 });
        }, 1000);
      },
      launch: function() {
        sendUpdate({ launched: true });
      },
      abort: function() {
        sendUpdate({ aborted: true });
      }
    };
  };
})(window);
