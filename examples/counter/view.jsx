/*global window, React*/
(function(ref) {
  ref.reactView = function(model, actions) {
    var onInc = function(_evt) {
      actions.sendUpdate({ add: 10 });
    };
    var onDecr = function(_evt) {
      actions.sendUpdate({ add: -10 });
    };
    return (
      <div>
        <div><span>Counter: {model.counter}</span></div>
        <div>
          <button onClick={onInc}>+</button>
          <button onClick={onDecr}>-</button>
        </div>
      </div>
    );
  };
})(window);
